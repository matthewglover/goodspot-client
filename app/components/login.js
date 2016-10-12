// @flow
import React, { PropTypes } from 'react';
import LoginButton from './login_button';

const styles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Login = (_: void, { muiTheme: { palette } }: Object): React.Element<*> =>
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
