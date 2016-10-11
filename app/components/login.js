import React, { PropTypes } from 'react';
// import { deepPurple600 } from 'material-ui/styles/colors';
import LoginButton from './login_button';

const styles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Login = (_, { muiTheme: { palette } }) =>
  (<div
    style={{
      ...styles,
      backgroundColor: palette.primary1Color,
    }}
  >
    <LoginButton />
  </div>);

Login.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Login;
