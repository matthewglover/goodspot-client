import React, { Component, PropTypes } from 'react';
import { compose } from 'ramda';
import { withRouter } from 'react-router';
import connector from './connector';

const requiresAuthentication = (MyComponent, redirectPath, requiredAuthStatus = true) => {
  class AuthenticatedComponent extends Component {

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps() {
      this.checkAuth();
    }

    checkAuth() {
      if (this.props.isAuthenticated !== requiredAuthStatus) {
        this.props.router.push(redirectPath);
      }
    }

    render() {
      return this.props.isAuthenticated === requiredAuthStatus
        ? (<MyComponent {...this.props} />)
        : null;
    }
  }

  AuthenticatedComponent.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    router: PropTypes.object.isRequired,
  };

  return compose(withRouter, connector)(AuthenticatedComponent);
};

export default requiresAuthentication;
