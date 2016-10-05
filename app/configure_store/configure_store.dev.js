// NOTE: module only included in development mode, so can use dev-dependencies

import { createStore } from 'redux';

import rootReducer from '../reducers';

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // eslint-disable-line

const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // eslint-disable-next-line global-require
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default));
  }

  return store;
};

export default configureStore;
