import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Nav from '../Nav/page'
import BasicMenu from '../Menu/page';
import MiniDrawer from '../Drawer/page'
const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = () => {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
            <MiniDrawer/>
            <div className='MenuRight'>
            <BasicMenu/>
            </div>
 
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
}

export default Map