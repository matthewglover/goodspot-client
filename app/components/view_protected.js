// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import * as fromState from '../reducers';
import * as api from '../api';

const SimpleViewProtected = ({ geocode }) =>
  <div>
    <FlatButton
      label="Primary"
      primary
      onTouchTap={geocode}
    />
  </div>;

SimpleViewProtected.propTypes = {
  geocode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) =>
  ({
    geocode: () => api.geocode(fromState.getJwt(state), 'bethnal'),
  });

// connector :: React.Component -> React.Component
const connector =
  connect(mapStateToProps);

const ViewProtected = connector(SimpleViewProtected);

export default ViewProtected;
