import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentSelectedItem: {}
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, actions) => {
        //state.currentSelectedItem= actions.payload
     return {
       ...state,
       currentSelectedItem: actions.payload
     }
    },
  }
});



export const { setItem } = itemSlice.actions;
export default itemSlice.reducer;
