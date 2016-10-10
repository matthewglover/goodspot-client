import React, { PropTypes } from 'react';
// import { withRouter } from 'react-router';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { deepPurple600 } from 'material-ui/styles/colors';
// import { getIsLoggedIn } from '../reducers';
import * as fromActionCreators from '../action_creators';

const styles = {
  width: '100%',
  height: '100%',
  backgroundColor: deepPurple600,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};


const SimpleSplash = ({ logout }) =>
  <div style={styles}>
    <RaisedButton
      label="Logout"
      onClick={logout}
      secondary
      style={styles.button}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
  </div>;

SimpleSplash.propTypes = {
  logout: PropTypes.func.isRequired,
};


// mapDispatchToProps :: State -> { logout }
const mapDispatchToProps = (dispatch) =>
  ({
    logout: () => dispatch(fromActionCreators.logout()),
  });

// connector :: React.Component -> React.Component
const connector =
  connect(() => ({}), mapDispatchToProps);

const Splash = connector(SimpleSplash);

export default Splash;
