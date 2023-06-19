import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  pickupCoordinates: {  
    lat: 27.685222,
    lng: 85.345017
  },
  pickupAddress: '',
  receiverCoordinates: {
    lat: 27.685222,
    lng: 85.345017
  },
  receiverAddress: ''
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setPickUpAddress: (state, actions) => {
      return {
        ...state,
        pickupAddress: actions.payload
      }
    },
    setReceiverAddress: (state, actions) => {
      return {
        ...state,
        receiverAddress: actions.payload
      }
    },
    setPickUpCoords: (state, actions) => {
      return {
        ...state,
        pickupCoordinates: actions.payload
      }
    },
    setReceiverCoords: (state, actions) => {
      return {
        ...state,
        receiverCoordinates: actions.payload
      }
    },
  }
});



export const { setPickUpAddress,setPickUpCoords,setReceiverAddress,setReceiverCoords } = locationSlice.actions;
export default locationSlice.reducer;
