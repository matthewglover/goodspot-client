// @flow
import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

type Props = {
  children: React.Element<Object>[],
};

type ReactElement = React.Element<Object>;

const Main = ({ children }: Props): ReactElement =>
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>;


Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
