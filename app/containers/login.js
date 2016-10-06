import React, { PropTypes } from 'react';
import { compose, pick, prop } from 'ramda';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateAuthStatus } from '../action_creators/';

// eslint-disable-next-line
const SimpleLogin = ({ router, updateAuthStatus, isAuthenticated }) => {
  const doLogin = () => {
    updateAuthStatus(!isAuthenticated);
    router.push('/splash');
  };

  return (<div>
    <p>Hello from Login Component</p>
    <a onClick={doLogin}>Log in</a>
  </div>);
};

SimpleLogin.propTypes = {
  router: PropTypes.object.isRequired,
  updateAuthStatus: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps =
  compose(pick(['isAuthenticated']), prop('auth'));

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateAuthStatus }, dispatch);


const connector =
  connect(mapStateToProps, mapDispatchToProps);

const LoginContainer =
  connector(SimpleLogin);

const Login = withRouter(LoginContainer);

export default Login;
