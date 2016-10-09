// @flow
/* eslint-disable import/prefer-default-export */
import * as api from '../api';
import createAuthenticate from './authenticate';

export const authenticate = createAuthenticate(api);
