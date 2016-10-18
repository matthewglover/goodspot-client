// @flow
import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';


const PlaceList = ({ places }: { places: Object[] }) =>
  (places.length > 0
    ? (<List>
      {places.map(place =>
        <ListItem key={place.place_id} primaryText={place.name} />)}
    </List>)
    : null);

PlaceList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
};

export default PlaceList;
