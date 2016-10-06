import React, { PropTypes } from 'react';


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

export default SimpleLogin;
