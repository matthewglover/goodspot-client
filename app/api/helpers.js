// @flow
import { compose, toPairs, map, join, merge } from 'ramda';
import config from '../config.json';

export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? config.productionUrl
    : config.testUrl;

export const apiUrl =
  `${baseUrl}/api/v1`;

export const loginRoute =
  `${baseUrl}${config.authPath}`;


export const requireStatusOk = (response: Response): Promise<Response> =>
  (response.status >= 400 && response.status <= 600
    ? Promise.reject(new Error(`Status: ${response.status}: ${response.statusText}`))
    : Promise.resolve(response));

export const objToQueryString =
  compose(join('&'), map(join('=')), toPairs);

const corsOptions = (jwt: string) =>
  ({
    cors: true,
    headers: new Headers({ Authorization: `Bearer ${jwt}` }),
  });

export const fetchProtected =
  (url: string, jwt: string, options: Object = {}) =>
    fetch(url, merge(corsOptions(jwt), options))
    .then(requireStatusOk)
    .then(response => response.json());
