// @flow
import * as localStorage from '../local_storage';
import * as helpers from './helpers';

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

export const logout =
  () => Promise.resolve(localStorage.clearState());
