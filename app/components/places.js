// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose, map, prop, defaultTo } from 'ramda';
import * as fromReducers from '../reducers';
import PlaceList from './place_list';
import PlaceMap from './place_map';

const SimplePlaces = ({ places, view, location }) =>
  (view === 'list'
    ? <PlaceList places={places} location={location} />
    : <PlaceMap places={places} location={location} />);

SimplePlaces.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.arrayOf(PropTypes.number),
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

const getLocation =
  compose(
    ({ lat, lng }) => [lat, lng],
    defaultTo({ lat: 0, lng: 0 }),
    fromReducers.getLocationForSelectedLocality);

const mapStateToProps = (state) =>
  ({
    places: getSimplePlaces(state),
    location: getLocation(state),
    view: fromReducers.getPlaceFinderView(state),
  });


const Places = connect(mapStateToProps)(SimplePlaces);

export default Places;
