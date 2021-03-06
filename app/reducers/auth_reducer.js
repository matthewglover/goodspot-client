// @flow
import { authStateTypes } from '../flow_types';
import {
  AUTH_LOGIN,
  AUTH_LOGGING_IN,
  AUTH_LOGOUT,
  AUTH_FAILURE } from '../action_types';

const {
  AuthReducer,
  AuthState,
  LoginFailureState,
  LoggedOutState,
  LoggingInState } = authStateTypes;

type LoginPayload = {
  jwt: string,
  credentials: Object
};


const login =
  (state: AuthState, { jwt, credentials }: LoginPayload): AuthState =>
    (state.status === 'loggingIn'
      ? {
        status: 'loggedIn',
        jwt,
        credentials,
      }
      : state);


const loginFailure = (action: Object): LoginFailureState =>
  ({
    status: 'loginFailure',
    err: action.err,
  });


const loggedOut: LoggedOutState =
  { status: 'loggedOut' };


const loggingIn: LoggingInState =
  { status: 'loggingIn' };


const authReducer: AuthReducer =
  (state = loggedOut, action) => {
    switch (action.type) {
      case AUTH_LOGIN:
        return login(state, action);
      case AUTH_LOGGING_IN:
        return loggingIn;
      case AUTH_LOGOUT:
        return loggedOut;
      case AUTH_FAILURE:
        return loginFailure(action);
      default:
        return state;
    }
  };


export default authReducer;


export const getIsLoggedIn = (state: AuthState): boolean =>
  state.status === 'loggedIn';


export const getIsLoggingIn = (state: AuthState): boolean =>
  state.status === 'loggingIn';


export const getDidLoginFail = (state: AuthState): boolean =>
  state.status === 'loginFailure';

export const getJwt = (state: AuthState): string =>
  (getIsLoggedIn(state)
    ? state.jwt
    : '');
