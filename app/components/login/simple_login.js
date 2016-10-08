import React, { PropTypes } from 'react';


const SimpleLogin = ({ doLogin }) =>
  (<div>
    <p>Hello from Login Component</p>
    <a onClick={doLogin}>Log in</a>
  </div>);

SimpleLogin.propTypes = {
  doLogin: PropTypes.func.isRequired,
};

export default SimpleLogin;
