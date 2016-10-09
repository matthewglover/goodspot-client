// @flow
import {
  UPDATE_AUTH_STATUS,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE } from '../action_types';
import { getIsAuthenticated } from '../reducers';
import * as api from '../api';


type updateAuthAction = {
  type: string,
  isAuthenticated: boolean
}

const onAuthSuccess = (dispatch: Function, jwt: string) => (credentials: Object) =>
  dispatch({
    type: AUTH_SUCCESS,
    jwt,
    credentials,
  });

const onAuthFailure = (dispatch: Function) => (err: Error) =>
  dispatch({
    type: AUTH_FAILURE,
    err,
  });

export const updateAuthStatus = (isAuthenticated: boolean): updateAuthAction =>
  ({
    type: UPDATE_AUTH_STATUS,
    isAuthenticated,
  });

export const authenticate =
  (jwt: string) => (dispatch: Function, getState: Function): Promise<undefined> => {
    if (getIsAuthenticated(getState())) {
      return Promise.resolve(new Error('User already authenticated'));
    }

    dispatch({ type: AUTH_REQUEST });

    return api.authenticateToken(jwt)
              .then(onAuthSuccess(dispatch, jwt), onAuthFailure);
  };
