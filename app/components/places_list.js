// @flow
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose, map, prop, defaultTo } from 'ramda';
import { List, ListItem } from 'material-ui/List';
import * as fromReducers from '../reducers';

const SimplePlacesList = ({ places }) =>
  <List>
    {places.map(place =>
      <ListItem primaryText={place.name} />)}
  </List>;

SimplePlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
};

const toSimplePlace = ({ place_id, name, types, vicinity, geometry: { location } }) =>
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
  });


const PlacesList = connect(mapStateToProps)(SimplePlacesList);

export default PlacesList;
