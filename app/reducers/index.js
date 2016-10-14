// @flow
import { combineReducers } from 'redux';
import auth, * as fromAuth from './auth_reducer';
import localitySearch, * as fromLocalitySearch from './locality_search_reducer';
import placeFinder, * as fromPlaceFinder from './place_finder_reducer';
import places, * as fromPlaces from './places_reducer';

import { appStateTypes } from '../flow_types';

const { AppState } = appStateTypes;

type AppReducer = (state: AppState, action: any) => AppState


const rootReducer: AppReducer =
  combineReducers({
    auth,
    localitySearch,
    placeFinder,
    places,
  });


export default rootReducer;


export const getIsLoggedIn = (state: AppState): boolean =>
  fromAuth.getIsLoggedIn(state.auth);

export const getIsLoggingIn = (state: AppState): boolean =>
  fromAuth.getIsLoggingIn(state.auth);

export const getDidLoginFail = (state: AppState): boolean =>
  fromAuth.getDidLoginFail(state.auth);

export const getJwt = (state: AppState): string =>
  fromAuth.getJwt(state.auth);

export const getLocalitySearchResults = (state: AppState): Object[] =>
  fromLocalitySearch.getLocalitySearchResults(state.localitySearch);

export const getLocalityFromSearchResults =
  (state: AppState, index: number, value: string): ?Object =>
    fromLocalitySearch.getLocalityFromSearchResults(state.localitySearch, index, value);

export const getSelectedLocality = (state: AppState): Object =>
  fromPlaceFinder.getSelectedLocality(state.placeFinder);

export const getSelectedLocalityId = (state: AppState): string =>
  getSelectedLocality(state).place_id;

export const getPlacesForSelectedLocality = (state: AppState): Object =>
  fromPlaces.getPlacesForLocality(state.places, getSelectedLocalityId(state));
