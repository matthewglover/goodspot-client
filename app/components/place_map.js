// @flow
import React, { PropTypes } from 'react';
import GoogleMap from './google_map';

const style = {
  map: {
    width: '100%',
    height: '100%',
    paddingBottom: '105px',
  },
};

const PlaceMap = ({ places, location }: { places: Object[], location: Number[] }) =>
  (places.length > 0
    ? (<div style={style.map}>
      <GoogleMap
        position={location}
        zoom={16}
      />
    </div>)
    : null);

PlaceMap.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
};

export default PlaceMap;
