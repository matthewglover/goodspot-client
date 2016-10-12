// @flow
import * as localStorage from '../local_storage';
import * as helpers from './helpers';
import { trace } from '../loggers';

type Credentials = {
  accessToken: string,
  expiresIn: string,
  iat: number,
  id: string,
  name: string,
  provider: string,
  tokenType: string,
};

const requireStatusOk = (response: Response): Promise<Response> =>
  (response.status >= 400 && response.status <= 600
    ? Promise.reject(new Error(`Status: ${response.status}: ${response.statusText}`))
    : Promise.resolve(response));


export const authenticateToken =
  (jwt: string): Promise<Credentials> =>
    fetch(helpers.verifyTokenRoute(jwt), { mode: 'cors' })
    .then(requireStatusOk)
    .then(response => response.json());

export const fetchProtected =
  (jwt: string): Promise<Object> => {
    const options = {
      cors: true,
      headers: new Headers({ Authorization: `Bearer ${jwt}` }),
    };

    return fetch(`${helpers.apiUrl}/protected`, options)
    .then(requireStatusOk)
    .then(response => response.json())
    .then(trace('protected response:'));
  };

export const geocode =
  (jwt: string, search: string): Promise<Object> => {
    const options = {
      cors: true,
      headers: new Headers({ Authorization: `Bearer ${jwt}` }),
    };

    return fetch(`${helpers.apiUrl}/api/v1/geocode?search=${search}`, options)
    .then(requireStatusOk)
    .then(response => response.json())
    .then(trace('geocode response:'));
  };

export const logout =
  () => Promise.resolve(localStorage.clearState());
