import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import throttle from 'lodash/throttle';
import { compose, pick } from 'ramda';

import './css/main.css';
import App from './components/app';
import configureStore from './configure_store';
import { loadState, saveState } from './local_storage';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const persistedState = loadState();

const store = configureStore(persistedState);


const saveStateToLocalStorage =
  throttle(compose(saveState, pick(['auth'])), 1000);

store.subscribe(() => saveStateToLocalStorage(store.getState()));

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  document.getElementById('app')
);


// See https://github.com/gaearon/redux-devtools/tree/master/examples/todomvc
if (module.hot) {
  module.hot.accept('./components/app', () => {
    // eslint-disable-next-line global-require
    const AppHmr = require('./components/app').default;

    render(
      <AppContainer>
        <AppHmr store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
