// @flow
import {
  AUTH_LOGIN,
  AUTH_LOGGING_IN,
  AUTH_LOGOUT,
  AUTH_FAILURE } from '../action_types';

type loggedInState = {
  jwt: string,
  credentials: Object
}

const login = (state: Object, { jwt, credentials }: loggedInState): Object =>
  (state.loggingIn
    ? {
      loggingIn: false,
      jwt,
      credentials,
    }
    : state);


const authReducer = (state: Object = { loggingIn: false }, action: Object): Object => {
  switch (action.type) {
    case AUTH_LOGIN:
      return login(state, action);
    case AUTH_LOGGING_IN:
      return { loggingIn: true };
    case AUTH_LOGOUT:
      return { loggingIn: false };
    case AUTH_FAILURE:
      return { loggingIn: false, err: action.err };
    default:
      return state;
  }
};

export default authReducer;

export const getIsLoggedIn = (state: Object): boolean =>
  !!state.credentials;

export const getIsLoggingIn = (state: Object): boolean =>
  !!state.loggingIn;

export const getDidLoginFail = (state: Object): boolean | Error =>
  !state.loggingIn && (state.err || false);
