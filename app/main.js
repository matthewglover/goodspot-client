import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';

import store from './main_helpers/store';
import './main_helpers/configure_environment';


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
