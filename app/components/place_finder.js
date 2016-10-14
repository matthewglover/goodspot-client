// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LocalitySearch from './locality_search';
import * as fromReducers from '../reducers';

const SimplePlaceFinder = ({ selectedLocality }) =>
  <div>
    <LocalitySearch />
    {selectedLocality ? <div>boom</div> : null}
  </div>;

SimplePlaceFinder.propTypes = {
  selectedLocality: PropTypes.object,
};

const mapStateToProps = (state) =>
  ({
    selectedLocality: fromReducers.getSelectedLocality(state),
  });


const PlaceFinder = connect(mapStateToProps)(SimplePlaceFinder);

export default PlaceFinder;
