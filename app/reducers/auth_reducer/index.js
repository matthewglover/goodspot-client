import {
  UPDATE_AUTH_STATUS } from '../../action_types';

// DEFAULT_AUTH :: AuthState
const DEFAULT_AUTH = {
  isAuthenticated: false,
};

// updateAuthStatus :: (AuthState, UpdateAuthAction) -> AuthState
const updateAuthStatus = (state, { isAuthenticated }) =>
  Object.assign({}, state, { isAuthenticated });


// authReducer :: (AuthState, Action) -> AuthState
const authReducer = (state = DEFAULT_AUTH, action) => {
  switch (action.type) {
    case UPDATE_AUTH_STATUS:
      return updateAuthStatus(state, action);
    default:
      return state;
  }
};

export default authReducer;

export const getIsAuthenticated = (state) =>
  state.isAuthenticated;
