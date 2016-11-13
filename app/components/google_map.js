/* global google */
import React, { Component } from 'react';

const style = {
  googleMap: {
    width: '100%',
    height: '100%',
  },
};

class GoogleMap extends Component {

  componentDidMount() {
    const mapOptions = {
      center: new google.maps.LatLng(51.52588799999999, -0.07814800000000001),
      zoom: 16,
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
