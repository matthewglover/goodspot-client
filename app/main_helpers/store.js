import throttle from 'lodash/throttle';
import { compose, pick } from 'ramda';
import configureStore from '../configure_store';
import { loadState, saveState } from '../local_storage';

const saveStateToLocalStorage =
  throttle(compose(saveState, pick(['auth'])), 1000);

const persistedState = loadState();

const store = configureStore(persistedState);

store.subscribe(() => saveStateToLocalStorage(store.getState()));

export default store;
