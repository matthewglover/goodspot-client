// @flow
import {
  LOCALITY_SELECTED,
  SET_PLACEFINDER_VIEW } from '../action_types';


const placeFinder =
  (state: Object = { view: 'list' }, action: Object) => {
    switch (action.type) {
      case LOCALITY_SELECTED:
        return { ...state, locality: action.locality };
      case SET_PLACEFINDER_VIEW:
        return { ...state, view: action.view };
      default:
        return state;
    }
  };

export default placeFinder;

export const getSelectedLocality = (state: Object): Object =>
  state.locality;

export const getView = (state: Object): string =>
  state.view;
