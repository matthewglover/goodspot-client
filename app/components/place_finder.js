// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LocalitySearch from './locality_search';
import Places from './places';
import * as fromReducers from '../reducers';


const SimplePlaceFinder = ({ selectedLocality, style }) =>
  <div style={style}>
    <LocalitySearch />
    {selectedLocality ? <Places /> : null}
  </div>;

SimplePlaceFinder.propTypes = {
  selectedLocality: PropTypes.object,
  style: PropTypes.object,
};

const mapStateToProps = (state) =>
  ({
    selectedLocality: fromReducers.getSelectedLocality(state),
  });


const PlaceFinder = connect(mapStateToProps)(SimplePlaceFinder);

export default PlaceFinder;
