import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { loginRoute } from '../api/helpers';


const LoginButton = () =>
  <RaisedButton
    label="Login"
    href={loginRoute}
    secondary
    icon={<FontIcon className="muidocs-icon-custom-github" />}
  />;


export default LoginButton;
