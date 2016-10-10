// @flow
/* eslint-disable import/prefer-default-export */
import * as api from '../api';
import createAuthenticate from './authenticate';
import createLogout from './logout';


export const authenticate = createAuthenticate(api);

export const logout = createLogout(api);
