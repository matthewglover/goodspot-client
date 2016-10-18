import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import * as fromReducers from '../reducers';
import { SET_PLACEFINDER_VIEW } from '../action_types';


const listIcon = <FontIcon className="material-icons">list</FontIcon>;
const mapIcon = <FontIcon className="material-icons">place</FontIcon>;


const SimpleBottomBar = ({ crntPlaceFinderView, selectedIndex, updatePlaceFinderView }) =>
  <Paper zDepth={1} style={{ width: '100%', position: 'fixed', bottom: 0 }}>
    <BottomNavigation selectedIndex={selectedIndex}>
      <BottomNavigationItem
        label="List"
        icon={listIcon}
        onTouchTap={() => updatePlaceFinderView(crntPlaceFinderView, 'list')}
      />
      <BottomNavigationItem
        label="Map"
        icon={mapIcon}
        onTouchTap={() => updatePlaceFinderView(crntPlaceFinderView, 'map')}
      />
    </BottomNavigation>
  </Paper>;

SimpleBottomBar.propTypes = {
  crntPlaceFinderView: PropTypes.string.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  updatePlaceFinderView: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  const crntPlaceFinderView = fromReducers.getPlaceFinderView(state);

  return {
    crntPlaceFinderView,
    selectedIndex: (crntPlaceFinderView === 'list' ? 0 : 1),
  };
};

const mapDispatchToProps = (dispatch) =>
  ({
    updatePlaceFinderView: (crntView, requestedView) => {
      if (crntView !== requestedView) {
        dispatch({ type: SET_PLACEFINDER_VIEW, view: requestedView });
      }
    },
  });

const BottomBar =
  connect(mapStateToProps, mapDispatchToProps)(SimpleBottomBar);

export default BottomBar;
