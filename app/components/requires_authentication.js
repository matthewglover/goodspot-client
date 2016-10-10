import React, { Component, PropTypes } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getIsLoggedIn } from '../reducers';

// mapStateToProps :: State -> { isAuthenticated: boolean }
const mapStateToProps = (state) =>
  ({
    isLoggedIn: getIsLoggedIn(state),
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

      componentDidUpdate() {
        this.checkAuth();
      }

      checkAuth() {
        if (this.props.isLoggedIn !== requiredAuthStatus) {
          this.props.router.push(redirectPath);
        }
      }

      render() {
        return this.props.isLoggedIn === requiredAuthStatus
          ? (<MyComponent {...this.props} />)
          : null;
      }
    }

    AuthenticatedComponent.propTypes = {
      isLoggedIn: PropTypes.bool.isRequired,
      router: PropTypes.object.isRequired,
    };

    return connector(AuthenticatedComponent);
  };

export default requiresAuthentication;
