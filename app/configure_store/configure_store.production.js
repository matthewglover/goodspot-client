import { createStore } from 'redux';
import rootReducer from '../reducers';


const configureStore = (initialState, enhancer) =>
  createStore(rootReducer, initialState, enhancer);

export default configureStore;
