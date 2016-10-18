/* eslint-disable max-len */
import test from 'ava';
import placeFinder from '../../app/reducers/place_finder_reducer';
import {
  LOCALITY_SELECTED,
  SET_PLACEFINDER_VIEW } from '../../app/action_types';

const placeFinderState = {
  view: 'list',
  locality: { description: 'Bethnal Green', id: '12345' },
};

test('placeFinder reducer default state is an empty object', (t) => {
  t.deepEqual(placeFinder(undefined, {}), { view: 'list' });
});

test('placeFinder reducer default state is an empty object', (t) => {
  const action =
    { type: LOCALITY_SELECTED, locality: placeFinderState.locality };

  t.deepEqual(placeFinder(undefined, action), placeFinderState);
});

test('placeFinder reducer updates view with SET_PLACEFINDER_VIEW action', (t) => {
  const action =
    { type: SET_PLACEFINDER_VIEW, view: 'map' };

  t.deepEqual(placeFinder(undefined, action), { view: 'map' });
});
