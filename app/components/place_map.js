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

const PlaceMap = ({ places }: { places: Object[] }) =>
  (places.length > 0
    ? (<div style={style.map}>
      <GoogleMap />
    </div>)
    : null);

PlaceMap.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
};

export default PlaceMap;
