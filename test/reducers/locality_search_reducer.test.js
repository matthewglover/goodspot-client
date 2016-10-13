/* eslint-disable max-len */
import test from 'ava';
import localitySearch, * as fromLocalitySearch from '../../app/reducers/locality_search_reducer';
import {
  LOCALITY_SEARCH_RESULTS } from '../../app/action_types';

const localities = [
  { description: 'Bethnal Green', id: '12345' },
  { description: 'Honor Oak Park', id: '4324' },
];

const localitySearchAction = {
  type: LOCALITY_SEARCH_RESULTS,
  localities,
};


test('localitySearchReducer default state is an empty array', (t) => {
  const actual = localitySearch(undefined, {});
  t.deepEqual(actual, []);
});

test('localitySearchReducer updates localites with results from action', (t) => {
  const actual = localitySearch(undefined, localitySearchAction);
  t.is(actual, localities);
});

test('getLocalitySearchResults returns localities', (t) => {
  const actual = fromLocalitySearch.getLocalitySearchResults(localities);
  t.is(actual, localities);
});
