// @flow
import { localitySearchStateTypes } from '../flow_types';
import { LOCALITY_SEARCH_RESULTS } from '../action_types';

const {
  LocalitySearchState,
} = localitySearchStateTypes;


const localitySearch =
  (state: LocalitySearchState = [], action: Object) => {
    switch (action.type) {
      case LOCALITY_SEARCH_RESULTS:
        return action.localities;
      default:
        return state;
    }
  };

export default localitySearch;

export const getLocalitySearchResults =
  (state: LocalitySearchState): Object[] =>
    state;

export const getLocalityFromSearchResults =
  (state: LocalitySearchState, index: number, value: string) =>
    (index === -1 || state[index].description !== value
      ? undefined
      : state[index]);
