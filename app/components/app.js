// @flow
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import requiresAuthentication from './requires_authentication';
import Login from './login';
import Main from './main';
import Splash from './splash';


const redirectIfNotAuthenticated = (Component, redirectPath) =>
  requiresAuthentication(Component, redirectPath, true);

const redirectIfAuthenticated = (Component, redirectPath) =>
  requiresAuthentication(Component, redirectPath, false);


const App = ({ store }: { store: Object }): Object =>
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRedirect to="/splash" />
        <Route path="splash" component={redirectIfNotAuthenticated(Splash, '/login')} />
        <Route path="login" component={redirectIfAuthenticated(Login, '/splash')} />
      </Route>
    </Router>
  </Provider>;

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
