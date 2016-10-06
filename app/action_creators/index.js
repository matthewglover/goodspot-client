/* eslint-disable import/prefer-default-export */
import { UPDATE_AUTH_STATUS } from '../action_types';

export const updateAuthStatus = (isAuthenticated) =>
  ({
    type: UPDATE_AUTH_STATUS,
    isAuthenticated,
  });
