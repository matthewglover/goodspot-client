import { createStore, compose } from 'redux';
import { identity } from 'ramda';
import rootReducer from '../reducers';


/* eslint-disable no-underscore-dangle */
const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : identity;
/* eslint-enable */

const configureStore = (initialState, customEnhancer) => {
  const enhancers = customEnhancer
    ? compose(customEnhancer, devToolsEnhancer)
    : devToolsEnhancer;

  const store = createStore(rootReducer, initialState, enhancers);

  if (module.hot) {
    module.hot.accept(
      '../reducers',
      () => store.replaceReducer(require('../reducers').default));  // eslint-disable-line global-require, max-len
  }

  return store;
};

export default configureStore;
