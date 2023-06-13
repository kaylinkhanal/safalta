import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Nav from '../Nav/page'
import BasicMenu from '../Menu/page';
import MiniDrawer from '../Drawer/page'
import { useSelector } from 'react-redux';
import ItemList from '../ItemList/page';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = () => {
  const {isItemFormOpen} =useSelector(state=>state.item)
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >

          {
          isItemFormOpen && (
            <div className='itemsLists'>
              <ItemList/>
              </div>)
              }
           <div className='itemsForm'>
             hi
              </div>
            <MiniDrawer/>
           
   
 
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
}

export default Map