/* global google */
import React, { Component, PropTypes } from 'react';

const style = {
  googleMap: {
    width: '100%',
    height: '100%',
  },
};

class GoogleMap extends Component {

  static propTypes = {
    position: PropTypes.array.isRequired,
    zoom: PropTypes.number.isRequired,
  }

  componentDidMount() {
    const mapOptions = {
      center: new google.maps.LatLng(...this.props.position),
      zoom: this.props.zoom,
    };

    this.map = new google.maps.Map(this.mapCanvas, mapOptions);
  }

  privateSetMapCanvas = (mapCanvas) => {
    this.mapCanvas = mapCanvas;
  }

  render() {
    return (<div
      style={style.googleMap}
      ref={this.privateSetMapCanvas}
    />);
  }
}

export default GoogleMap;
