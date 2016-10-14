/* eslint-disable max-len */
import test from 'ava';
import placeFinder from '../../app/reducers/place_finder_reducer';
import {
  LOCALITY_SELECTED } from '../../app/action_types';

const placeFinderState = {
  locality: { description: 'Bethnal Green', id: '12345' },
};

test('placeFinder reducer default state is an empty object', (t) => {
  t.deepEqual(placeFinder(undefined, {}), {});
});

test('placeFinder reducer default state is an empty object', (t) => {
  const action =
    { type: LOCALITY_SELECTED, locality: placeFinderState.locality };

  t.deepEqual(placeFinder({}, action), placeFinderState);
});
