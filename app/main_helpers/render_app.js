import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from '../components/app';


const renderApp = store =>
  render(
    <AppContainer>
      <App store={store} />
    </AppContainer>,
    document.getElementById('app')
  );

export default renderApp;
