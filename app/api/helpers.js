// @flow
import config from '../config.json';

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? config.productionUrl
    : config.testUrl;

export const loginRoute =
  `${apiUrl}${config.authPath}`;

export const verifyTokenRoute = (jwt: string) =>
  `${apiUrl}/protected?jwt=${jwt}`;
  // `${apiUrl}${config.verifyTokenPath}?jwt=${jwt}`;
