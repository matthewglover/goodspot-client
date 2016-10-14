// @flow
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { pick, merge } from 'ramda';
import { LOCALITY_SELECTED } from '../action_types';
// import { trace } from '../loggers';


const localityStream = (actionStream) =>
  actionStream
  .ofType(LOCALITY_SELECTED)
  .map(pick(['locality']));


const loadingPlacesNearLocalityEpic =
  (actionStream: Observable<Object>): Observable<Object> =>
    localityStream(actionStream)
    .map(merge({ type: 'LOADING PLACES' }));


const loadPlacesNearLocalityEpic =
  (actionStream: Observable<Object>): Observable<Object> =>
    localityStream(actionStream)
    .map(merge({ type: 'OO IT WORKS' }));


export default combineEpics(
  loadPlacesNearLocalityEpic,
  loadingPlacesNearLocalityEpic);
