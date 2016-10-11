// @flow
import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  children: React.Element<Object>[],
};

type ReactElement = React.Element<Object>;

const muiTheme = getMuiTheme({});

const Main = ({ children }: Props): ReactElement =>
  <MuiThemeProvider muiTheme={muiTheme}>
    {children}
  </MuiThemeProvider>;


Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
