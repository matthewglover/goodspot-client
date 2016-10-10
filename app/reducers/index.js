// @flow
import { combineReducers } from 'redux';
import auth, * as fromAuth from './auth_reducer';

import type { AuthState } from './auth_reducer';  // eslint-disable-line

type AppState = {
  auth: AuthState,
};

type AppReducer = (state: AppState, action: any) => AppState

const rootReducer: AppReducer =
  combineReducers({
    auth,
  });

export default rootReducer;

export const getIsLoggedIn = (state: AppState): boolean =>
  fromAuth.getIsLoggedIn(state.auth);

export const getIsLoggingIn = (state: AppState): boolean =>
  fromAuth.getIsLoggingIn(state.auth);

export const getDidLoginFail = (state: AppState): boolean =>
  fromAuth.getDidLoginFail(state.auth);
