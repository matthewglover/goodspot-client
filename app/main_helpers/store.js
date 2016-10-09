import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
// import { compose, pick } from 'ramda';
import configureStore from '../configure_store';
import { loadState, saveState } from '../local_storage';
import { setJwt } from '../action_creators';
import queryParams from './query_params';

const saveStateToLocalStorage =
  throttle(saveState, 1000);

const persistedState = loadState();

const logger = process.env.NODE_ENV !== 'production'
  ? createLogger()
  : undefined;

const middlewares = [thunk, logger].filter(v => !!v);

const store = configureStore(persistedState, applyMiddleware(...middlewares));

if (queryParams.jwt) store.dispatch(setJwt(queryParams.jwt));

store.subscribe(() => saveStateToLocalStorage(store.getState()));

export default store;
