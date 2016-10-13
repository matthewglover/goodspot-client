// @flow
import * as helpers from './helpers';
import config from '../config.json';

type Credentials = {
  accessToken: string,
  expiresIn: string,
  iat: number,
  id: string,
  name: string,
  provider: string,
  tokenType: string,
};


const authenticateTokenRoute = (jwt: string) =>
  `${helpers.apiUrl}${config.authenticateTokenPath}?jwt=${jwt}`;


const authenticateToken =
  (jwt: string): Promise<Credentials> =>
    fetch(authenticateTokenRoute(jwt), { mode: 'cors' })
    .then(helpers.requireStatusOk)
    .then(response => response.json());


export default authenticateToken;
