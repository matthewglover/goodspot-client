// @flow
import { merge, evolve, concat, has, compose, uniqBy, prop, is } from 'ramda';
import {
  PLACES_LOADED } from '../action_types';

type PlacesState = {};

type LocalityIdPlaces = {
  results: Object[],
};


const combine =
  (crntPlaces: LocalityIdPlaces, newPlaces: LocalityIdPlaces): LocalityIdPlaces =>
    evolve(
      {
        results: compose(
          uniqBy(prop('place_id')),
          concat(crntPlaces.results)),
      },
      newPlaces
    );


const updatePlaces = (state: PlacesState, action: Object) => {
  const crntPlaces = state[action.localityId];

  return crntPlaces
    ? combine(crntPlaces, action.places)
    : action.places;
};

const places =
  (state: PlacesState = {}, action: Object) => {
    switch (action.type) {
      case PLACES_LOADED:
        return merge(
          state,
          { [action.localityId]: updatePlaces(state, action) });
      default:
        return state;
    }
  };

export default places;

export const getPlacesForLocality =
  (state: PlacesState, localityId: string): ?Object =>
    (is(Object, state[localityId])
      ? state[localityId].places
      : undefined);

export const placeDataExistsForLocality =
  (state: PlacesState, localityId: string): boolean =>
    has(localityId, state);
