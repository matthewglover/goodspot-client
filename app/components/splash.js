import React, { PropTypes } from 'react';
import HeaderBar from './header_bar';
// import LogoutButton from './logout_button';


const containerStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-top',
  alignItems: 'center',
};


const Splash = (_, { muiTheme: { palette } }) =>
  <div
    style={{
      ...containerStyles,
      backgroundColor: palette.canvasColor,
    }}
  >
    <HeaderBar />
    <span>done like a kipper!</span>
    {/* <LogoutButton /> */}
  </div>;

Splash.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Splash;
