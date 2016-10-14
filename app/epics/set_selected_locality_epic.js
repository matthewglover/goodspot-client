// @flow
import { Observable } from 'rxjs';
import { SELECT_LOCALITY, LOCALITY_SELECTED } from '../action_types';
import * as fromReducers from '../reducers';


const getSelectedLocality =
  (store: Object) => ({ index, value }: Object): ?Object =>
    fromReducers.getLocalityFromSearchResults(store.getState(), index, value);


const setSelectedLocalityEpic =
  (actionStream: Observable<Object>, store: Object): Observable<Object> =>
    actionStream
    .ofType(SELECT_LOCALITY)
    .map(getSelectedLocality(store))
    .map(locality => ({ type: LOCALITY_SELECTED, locality }));

export default setSelectedLocalityEpic;
