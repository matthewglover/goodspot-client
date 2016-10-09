// @flow
import {
  AUTH_LOGGING_IN,
  AUTH_LOGIN,
  AUTH_FAILURE } from '../action_types';
import { getIsLoggedIn } from '../reducers';

const onAuthSuccess = (dispatch: Function, jwt: string) => (credentials: Object) =>
  dispatch({
    type: AUTH_LOGIN,
    jwt,
    credentials,
  });


const onAuthFailure = (dispatch: Function) => (err: Error) =>
  dispatch({
    type: AUTH_FAILURE,
    err,
  });

const createAuthenticate =
  (api: Object) =>
  (jwt: string) =>
  (dispatch: Function, getState: Function): Promise<void | Error> => {
    if (getIsLoggedIn(getState())) {
      return Promise.reject(new Error('User already authenticated'));
    }

    dispatch({ type: AUTH_LOGGING_IN });

    return api.authenticateToken(jwt)
              .then(onAuthSuccess(dispatch, jwt), onAuthFailure(dispatch));
  };

export default createAuthenticate;
