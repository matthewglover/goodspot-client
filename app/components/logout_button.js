// @flow
import React, { PropTypes } from 'react';
import { always } from 'ramda';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import * as fromActionCreators from '../action_creators';


const SimpleLogoutButton = ({ logout }) =>
  <RaisedButton
    label="Logout"
    onClick={logout}
    secondary
    icon={<FontIcon className="muidocs-icon-custom-github" />}
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
