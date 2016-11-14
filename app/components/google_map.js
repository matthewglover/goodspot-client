/* global google */
import React, { Component, PropTypes } from 'react';
import { map, reduce } from 'ramda';

const style = {
  googleMap: {
    width: '100%',
    height: '100%',
  },
};

const buildMarker = ({ position, title }) =>
  new google.maps.Marker({
    position,
    title,
  });

const buildMarkers = map(buildMarker);

const LatLngObj =
  PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  });


class GoogleMap extends Component {

  static propTypes = {
    position: LatLngObj.isRequired,
    zoom: PropTypes.number.isRequired,
    markerData: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
    markerData: [],
  }

  constructor() {
    super();
    this.markers = [];
  }

  componentDidMount() {
    this.privateSetMap();
    this.privateBuildMarkers();
    this.privateShowMarkers();
    this.privateFitMarkersOnMap();
  }

  privateSetMapCanvas = (mapCanvas) => {
    this.mapCanvas = mapCanvas;
  }

  privateSetMap() {
    const mapOptions = {
      center: this.props.position,
      zoom: this.props.zoom,
    };

    this.map = new google.maps.Map(this.mapCanvas, mapOptions);
  }

  privateDeleteMarkers() {
    this.privateClearMarkers();
    this.markers = [];
  }

  privateBuildMarkers() {
    this.privateDeleteMarkers();
    this.markers = buildMarkers(this.props.markerData);
  }

  privateShowMarkers() {
    this.privateSetMapForMarkers(this.map);
  }

  privateClearMarkers() {
    this.privateSetMapForMarkers(null);
  }

  privateSetMapForMarkers(mapRef) {
    this.markers.forEach(marker => marker.setMap(mapRef));
  }

  privateFitMarkersOnMap() {
    this.map.fitBounds(this.markerBounds);
  }

  get markerBounds() {
    return reduce(
      (bounds, marker) => bounds.extend(marker.getPosition()),
      new google.maps.LatLngBounds(),
      this.markers);
  }

  render() {
    return (<div
      style={style.googleMap}
      ref={this.privateSetMapCanvas}
    />);
  }
}

export default GoogleMap;
