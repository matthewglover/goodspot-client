import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';


const hotRenderApp = (store) => {
  module.hot.accept('../components/app', () => {
    // eslint-disable-next-line global-require
    const App = require('../components/app').default;

    render(
      <AppContainer>
        <App store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
};

export default hotRenderApp;
