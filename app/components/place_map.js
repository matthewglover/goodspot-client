// @flow
import React, { PropTypes } from 'react';

const PlaceMap = ({ places }: { places: Object[] }) =>
  (places.length > 0
    ? (<div>
      ooh it's a map, nice!
    </div>)
    : null);

PlaceMap.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
};

export default PlaceMap;
