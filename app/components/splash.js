import React from 'react';
import { deepPurple600 } from 'material-ui/styles/colors';
import LogoutButton from './logout_button';


const styles = {
  width: '100%',
  height: '100%',
  backgroundColor: deepPurple600,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};


const Splash = () =>
  <div style={styles}>
    <LogoutButton />
  </div>;

export default Splash;
