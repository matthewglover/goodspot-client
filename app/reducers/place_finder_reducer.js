// @flow
import { merge } from 'ramda';
import { LOCALITY_SELECTED } from '../action_types';


const placeFinder =
  (state: Object = {}, action: Object) => {
    switch (action.type) {
      case LOCALITY_SELECTED:
        return merge(state, { locality: action.locality });
      default:
        return state;
    }
  };

export default placeFinder;

export const getSelectedLocality = (state: Object): Object =>
  state.locality;
