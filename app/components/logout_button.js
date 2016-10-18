  // @flow
import React, { PropTypes } from 'react';
import { always } from 'ramda';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import * as fromActionCreators from '../action_creators';


const SimpleLogoutButton = ({ logout }) =>
  <MenuItem
    onTouchTap={logout}
    primaryText="Sign out"
  />;

SimpleLogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
};


const mapDispatchToProps: (dispatch: Function) => Object =
  (dispatch) =>
    ({
      logout: () => dispatch(fromActionCreators.logout()),
    });

const mapStateToProps: () => {} =
  always({});

// connector :: React.Component -> React.Component
const connector =
  connect(mapStateToProps, mapDispatchToProps);

const LogoutButton = connector(SimpleLogoutButton);

export default LogoutButton;
