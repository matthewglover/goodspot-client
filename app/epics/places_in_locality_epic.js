// @flow
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { pick, merge, path } from 'ramda';
import * as api from '../api';
import * as fromReducers from '../reducers';
import {
  LOCALITY_SELECTED,
  LOADING_PLACES,
  PLACES_LOADED } from '../action_types';


const { fromPromise } = Observable;


const localityStream = (actionStream) =>
  actionStream
  .ofType(LOCALITY_SELECTED)
  .map(pick(['locality']));


const placesInLocalityPromise =
  (store: Object, placeId: string): Promise<Object[]> => {
    const jwt = fromReducers.getJwt(store.getState());
    return api.placesInLocality(jwt, placeId);
  };

const placesInLocalityStream =
  (actionStream: Observable<Object>, store: Object) =>
  (localityId: string): Observable<Object[]> =>
    fromPromise(placesInLocalityPromise(store, localityId))
    .map(places => ({ localityId, places }))
    .takeUntil(actionStream.ofType(LOCALITY_SELECTED));


const loadPlacesInLocalityEpic =
  (actionStream: Observable<Object>, store: Object): Observable<Object> =>
    localityStream(actionStream)
    .map(path(['locality', 'place_id']))
    .switchMap(placesInLocalityStream(actionStream, store))
    .map(merge({ type: PLACES_LOADED }));


const loadingPlacesInLocalityEpic =
  (actionStream: Observable<Object>): Observable<Object> =>
    localityStream(actionStream)
    .map(merge({ type: LOADING_PLACES }));


export default combineEpics(
  loadPlacesInLocalityEpic,
  loadingPlacesInLocalityEpic);
