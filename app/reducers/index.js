import { combineReducers } from 'redux';
import auth, * as fromAuth from './auth_reducer';

// rootReducer :: State -> State
const rootReducer = combineReducers({
  auth,
});

export default rootReducer;

export const getIsAuthenticated = (state) =>
  fromAuth.getIsAuthenticated(state.auth);
