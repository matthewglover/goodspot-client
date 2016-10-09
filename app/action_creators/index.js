// @flow
/* eslint-disable import/prefer-default-export */
import {
  UPDATE_AUTH_STATUS,
  SET_JWT } from '../action_types';

type updateAuthAction = {
  type: string,
  isAuthenticated: boolean
}

type setJwtAction = {
  type: string,
  jwt: string
}

export const updateAuthStatus = (isAuthenticated: boolean): updateAuthAction =>
  ({
    type: UPDATE_AUTH_STATUS,
    isAuthenticated,
  });

export const setJwt = (jwt: string): setJwtAction =>
  ({
    type: SET_JWT,
    jwt,
  });
