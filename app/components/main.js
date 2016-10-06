import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Main = ({ children }) =>
  <MuiThemeProvider>
    <div>
      <div>
        <Link to="/splash">Splash</Link><br />
        <Link to="/login">Login</Link><br />
      </div>
      {children}
    </div>
  </MuiThemeProvider>;


Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
