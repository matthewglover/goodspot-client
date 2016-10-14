// @flow
import { merge, evolve, concat } from 'ramda';
import {
  PLACES_LOADED } from '../action_types';

type PlacesState = {};

type PlaceIdPlaces = {
  results: Object[],
};


const combine =
  (crntPlaces: PlaceIdPlaces, newPlaces: PlaceIdPlaces): PlaceIdPlaces =>
    evolve(
      { results: concat(crntPlaces.results) },
      newPlaces
    );


const updatePlaces = (state: PlacesState, action: Object) => {
  const crntPlaces = state[action.placeId];

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
          { [action.placeId]: updatePlaces(state, action) });
      default:
        return state;
    }
  };

export default places;
