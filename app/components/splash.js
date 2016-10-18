// @flow
import React, { PropTypes } from 'react';
import HeaderBar from './header_bar';
import { MuiTheme } from '../flow_types';
import PlaceFinder from './place_finder';
import BottomBar from './bottom_bar';


const containerStyles = {
  width: '100%',
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-top',
  alignItems: 'center',
};


const Splash = (_: void, { muiTheme: { palette } }: MuiTheme) =>
  <div
    style={{
      ...containerStyles,
      backgroundColor: palette.canvasColor,
    }}
  >
    <HeaderBar style={{ position: 'fixed' }} />
    <PlaceFinder style={{ marginTop: '75px', marginBottom: '50px', width: '100%' }} />
    <BottomBar />
  </div>;

Splash.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Splash;
