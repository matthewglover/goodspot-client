// @flow
import React, { PropTypes } from 'react';
import { map } from 'ramda';
import GoogleMap from './google_map';

const style = {
  map: {
    width: '100%',
    height: '100%',
    paddingBottom: '105px',
  },
};

const placeToMarker = ({ place_id, name, location }) =>
  ({
    id: place_id,
    position: location,
    title: name,
  });

const toMarkerData = map(placeToMarker);

const PlaceMap = ({ places, location }: { places: Object[], location: Number[] }) =>
  (places.length > 0
    ? (<div style={style.map}>
      <GoogleMap
        position={location}
        zoom={16}
        markerData={toMarkerData(places)}
      />
    </div>)
    : null);

PlaceMap.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
};

export default PlaceMap;
