import { combineReducers } from 'redux';
import auth from './auth_reducer';

// rootReducer :: State -> State
const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
