import React, { PropTypes } from 'react';
import { Router, Route, IndexRedirect, hashHistory, Link, withRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const auth = { isLoggedIn: false };

const TestApp = ({ children }) =>
  <div>
    <div>
      <Link to="/splash">Splash</Link><br />
      <Link to="/login">Login</Link><br />
    </div>
    {children}
  </div>;

TestApp.propTypes = {
  children: PropTypes.node.isRequired,
};

const Splash = () =>
  <div>
    Hello from Splash Component
  </div>;

const Login = withRouter(({ router }) => {
  const doLogin = () => {
    auth.isLoggedIn = true;
    router.push('/splash');
  };

  return (
    <div>
      <p>Hello from Login Component</p>
      <a onClick={doLogin}>Log in</a>
    </div>);
});

const redirectIfNotAuthenticated = (nextState, replace) => {
  if (!auth.isLoggedIn) {
    replace({
      pathname: '/login',
      state: { nextPathName: nextState.location.pathname },
    });
  }
};

const redirectIfAuthenticated = (nextState, replace) => {
  if (auth.isLoggedIn) {
    replace({
      pathname: '/splash',
      state: { nextPathName: nextState.location.pathname },
    });
  }
};

const App = () =>
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={TestApp}>
        <IndexRedirect to="/splash" />
        <Route path="splash" component={Splash} onEnter={redirectIfNotAuthenticated} />
        <Route path="login" component={Login} onEnter={redirectIfAuthenticated} />
      </Route>
    </Router>
  </MuiThemeProvider>;

export default App;
