import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { identity } from 'ramda';
import configureStore from '../configure_store';
import { loadState, saveState } from '../local_storage';
import { authenticate } from '../action_creators';
import queryParams from './query_params';

const saveStateToLocalStorage =
  throttle(saveState, 1000);

const persistedState = loadState();

const logger = process.env.NODE_ENV !== 'production'
  ? createLogger()
  : undefined;

const middlewares = [thunk, logger].filter(identity);

const store = configureStore(persistedState, applyMiddleware(...middlewares));

if (queryParams.jwt) store.dispatch(authenticate(queryParams.jwt));

store.subscribe(() => saveStateToLocalStorage(store.getState()));

export default store;
