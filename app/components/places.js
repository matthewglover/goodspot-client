// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose, map, prop, defaultTo } from 'ramda';
import * as fromReducers from '../reducers';
import PlaceList from './place_list';
import PlaceMap from './place_map';


const SimplePlaces = ({ places, view }) =>
  (view === 'list'
    ? <PlaceList places={places} />
    : <PlaceMap places={places} />);

SimplePlaces.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
  view: PropTypes.string.isRequired,
};

const toSimplePlace =
  ({ place_id, name, types, vicinity, geometry: { location } }) =>
    ({
      place_id,
      name,
      location,
      types,
      vicinity,
    });

const getSimplePlaces =
  compose(
    map(toSimplePlace),
    prop('results'),
    defaultTo({ results: [] }),
    fromReducers.getPlacesForSelectedLocality);

const mapStateToProps = (state) =>
  ({
    places: getSimplePlaces(state),
    view: fromReducers.getPlaceFinderView(state),
  });


const Places = connect(mapStateToProps)(SimplePlaces);

export default Places;
