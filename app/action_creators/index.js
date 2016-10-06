// @flow
/* eslint-disable import/prefer-default-export */
import { UPDATE_AUTH_STATUS } from '../action_types';

type updateAuthAction = {
  type: string,
  isAuthenticated: boolean
}


export const updateAuthStatus = (isAuthenticated: boolean): updateAuthAction =>
  ({
    type: UPDATE_AUTH_STATUS,
    isAuthenticated,
  });
