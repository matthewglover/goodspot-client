import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { deepPurple600 } from 'material-ui/styles/colors';
import { loginRoute } from '../api/helpers';

const styles = {
  width: '100%',
  height: '100%',
  backgroundColor: deepPurple600,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Login = () =>
  (<div style={styles}>
    <RaisedButton
      label="Login"
      href={loginRoute}
      secondary
      style={styles.button}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
  </div>);


export default Login;
