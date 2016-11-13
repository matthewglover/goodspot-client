/* eslint-disable max-len */
import test from 'ava';
import { concat } from 'ramda';
import places, * as fromPlacesReducer from '../../app/reducers/places_reducer';
import {
  PLACES_LOADED } from '../../app/action_types';
import placesData from '../helpers/places_data';
import morePlacesData from '../helpers/more_places_data';


test('places reducer default state is an empty object', (t) => {
  t.deepEqual(places(undefined, {}), {});
});

test('places reducer adds places on PLACES_LOADED action', (t) => {
  const myAction = {
    type: PLACES_LOADED,
    localityId: 'locality1',
    places: placesData.locality1,
  };

  t.deepEqual(
    places(undefined, myAction),
    {
      [myAction.localityId]: myAction.places,
    });
});

test('places reducer adds new localityId and keeps existing on PLACES_LOADED action', (t) => {
  const initialState = {
    locality1: placesData.locality1,
  };

  const endState = {
    locality1: placesData.locality1,
    locality2: placesData.locality2,
  };

  const myAction = {
    type: PLACES_LOADED,
    localityId: 'locality2',
    places: placesData.locality2,
  };

  t.deepEqual(places(initialState, myAction), endState);
});

test('places reducer adds new data to existing localityId on PLACES_LOADED action', (t) => {
  const initialState = {
    locality2: placesData.locality2,
  };

  const endState = {
    locality2: {
      location: placesData.locality2.location,
      next_page_token: morePlacesData.locality2.next_page_token,
      results: concat(initialState.locality2.results, morePlacesData.locality2.results),
    },
  };

  const myAction = {
    type: PLACES_LOADED,
    localityId: 'locality2',
    places: morePlacesData.locality2,
  };

  t.deepEqual(places(initialState, myAction), endState);
});

test('fromPlacesReducer.getPlacesForLocality returns all places for given locality', (t) => {
  const state = {
    locality1: placesData.locality1,
  };

  t.is(
    fromPlacesReducer.getPlacesForLocality(state, 'locality1'),
    state.locality1.places);
});

test('fromPlacesReducer.placeDataExistsForLocality returns if data exists for locality', (t) => {
  const state = {
    locality1: placesData.locality1,
    locality2: placesData.locality2,
  };

  t.plan(3);
  t.true(
    fromPlacesReducer.placeDataExistsForLocality(state, 'locality1'));
  t.true(
    fromPlacesReducer.placeDataExistsForLocality(state, 'locality2'));
  t.false(
    fromPlacesReducer.placeDataExistsForLocality(state, 'locality3'));
});
