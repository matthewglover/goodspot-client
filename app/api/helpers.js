// @flow
import config from '../config.json';

export const apiUrl =
  process.env.NODE_ENV === 'production'
    ? config.productionUrl
    : config.testUrl;

export const loginRoute =
  `${apiUrl}${config.authPath}`;

export const verifyTokenRoute = (jwt: string) =>
  `${apiUrl}${config.verifyTokenPath}?jwt=${jwt}`;
