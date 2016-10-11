// @flow
import config from '../config.json';

export const loginRoute =
  `${config.apiUrl}${config.authPath}`;

export const verifyTokenRoute = (jwt: string) =>
  `${config.apiUrl}${config.verifyTokenPath}?jwt=${jwt}`;
