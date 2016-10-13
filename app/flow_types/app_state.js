/* eslint-disable import/prefer-default-export */
import * as authStateTypes from './auth_state';
import * as localitySearchTypes from './locality_search_state';

export type AppState = {
  auth: authStateTypes.AuthState,
  localitySearch: localitySearchTypes.LocalitySearchState,
};
