import React, { Component, PropTypes } from 'react';
import { compose } from 'ramda';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../reducers';

// mapStateToProps :: State -> { isAuthenticated: boolean }
const mapStateToProps = (state) =>
  ({
    isAuthenticated: getIsAuthenticated(state),
  });


// connector :: React.Component -> React.Component
const connector =
  compose(withRouter, connect(mapStateToProps));


// requiresAuthentication :: (React.Component, string, boolean) -> React.Component
const requiresAuthentication =
  (MyComponent, redirectPath, requiredAuthStatus = true) => {
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

    return connector(AuthenticatedComponent);
  };

export default requiresAuthentication;
