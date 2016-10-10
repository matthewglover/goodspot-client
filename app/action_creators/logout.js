// @flow
import {
  AUTH_LOGGING_OUT,
  AUTH_LOGOUT } from '../action_types';
import { getIsLoggedIn } from '../reducers';


const onLogoutSuccess =
  (dispatch: Function): void =>
    dispatch({ type: AUTH_LOGOUT });

const createLogout =
  (api: Object) =>
  () =>
  (dispatch: Function, getState: Function): Promise<void | Error> => {
    if (!getIsLoggedIn(getState())) {
      return Promise.reject(new Error('User already logged out'));
    }

    dispatch({ type: AUTH_LOGGING_OUT });

    return api.logout()
              .then(onLogoutSuccess(dispatch));
  };

export default createLogout;
