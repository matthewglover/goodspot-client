// @flow
import { Observable } from 'rxjs';
import { prop, test } from 'ramda';
import * as api from '../api';
import * as fromReducer from '../reducers';
import { SEARCH_FOR_LOCALITY, LOCALITY_SEARCH_RESULTS } from '../action_types';

const { fromPromise } = Observable;

const autocompletePromise =
  (store: Object, input: string): Promise<Object[]> => {
    const jwt = fromReducer.getJwt(store.getState());
    return api.autocomplete(jwt, input);
  };

const autcompleteStream =
  (store: Object) => (input: string): Observable<Object[]> =>
    fromPromise(autocompletePromise(store, input));

const searchForLocalityEpic =
  (actionStream: Observable, store: Object): Observable<Object> =>
    actionStream
    .ofType(SEARCH_FOR_LOCALITY)
    .map(prop('input'))
    .filter(test(/^\w{3,}$/))
    .flatMap(autcompleteStream(store))
    .map(localities => ({ type: LOCALITY_SEARCH_RESULTS, localities }));


export default searchForLocalityEpic;
