// @flow
import config from '../config.json';

export const apiUrl =
  process.env.NODE_ENV === 'production'
    ? config.productionUrl
    : config.testUrl;

export const loginRoute =
  `${apiUrl}${config.authPath}`;


export const requireStatusOk = (response: Response): Promise<Response> =>
  (response.status >= 400 && response.status <= 600
    ? Promise.reject(new Error(`Status: ${response.status}: ${response.statusText}`))
    : Promise.resolve(response));
