import { combineReducers } from 'redux';
import auth, * as fromAuth from './auth_reducer';

// rootReducer :: State -> State
const rootReducer = combineReducers({
  auth,
});

export default rootReducer;

export const getIsLoggedIn = (state) => fromAuth.getIsLoggedIn(state.auth);

export const getIsLoggingIn = (state) => fromAuth.getIsLoggingIn(state.auth);

export const getDidLoginFail = (state) => fromAuth.getDidLoginFail(state.auth);
