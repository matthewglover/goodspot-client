// @flow
import { Observable } from 'rxjs';
import { prop, test, merge } from 'ramda';
import * as api from '../api';
import * as fromReducers from '../reducers';
import { SEARCH_FOR_LOCALITY, LOCALITY_SEARCH_RESULTS, SELECT_LOCALITY } from '../action_types';

const { fromPromise } = Observable;

const autocompletePromise =
  (store: Object, input: string): Promise<Object[]> => {
    const jwt = fromReducers.getJwt(store.getState());
    return api.autocomplete(jwt, input);
  };

const autcompleteStream =
  (actionStream: Observable<Object>, store: Object) =>
  (input: string): Observable<Object[]> =>
    fromPromise(autocompletePromise(store, input))
    .takeUntil(actionStream.ofType(SELECT_LOCALITY));


const searchForLocalityEpic =
  (actionStream: Observable<Object>, store: Object): Observable<Object> =>
    actionStream
    .ofType(SEARCH_FOR_LOCALITY)
    .debounceTime(200)
    .map(prop('input'))
    .filter(test(/^.{3,}$/))
    .switchMap(autcompleteStream(actionStream, store))
    .map(merge({ type: LOCALITY_SEARCH_RESULTS }));


export default searchForLocalityEpic;
