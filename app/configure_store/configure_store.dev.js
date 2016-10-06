import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // eslint-disable-line

const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(
      '../reducers/root_reducer',
      () => store.replaceReducer(require('../reducers/root_reducer').default));  // eslint-disable-line global-require, max-len
  }

  return store;
};

export default configureStore;
