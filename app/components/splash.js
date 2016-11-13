// @flow
import React, { PropTypes } from 'react';
import HeaderBar from './header_bar';
import { MuiTheme } from '../flow_types';
import PlaceFinder from './place_finder';
import BottomBar from './bottom_bar';


const style = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-top',
    alignItems: 'center',
  },
  headerBar: {
    position: 'fixed',
  },
  placeFinder: { paddingTop: '75px',
    marginBottom: '50px',
    width: '100%',
    height: '100%',
  },
};


const Splash = (_: void, { muiTheme: { palette } }: MuiTheme) =>
  <div
    style={{
      ...style.container,
      backgroundColor: palette.canvasColor,
    }}
  >
    <HeaderBar style={style.headerBar} />
    <PlaceFinder style={style.placeFinder} />
    <BottomBar />
  </div>;

Splash.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Splash;
