import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentSelectedItem: {},
  isItemFormOpen: false
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
    setItemFormOpen: (state, actions) => {
      return {
        ...state,
        isItemFormOpen: !state.isItemFormOpen
      }
  },
  }
});



export const { setItem , setItemFormOpen} = itemSlice.actions;
export default itemSlice.reducer;
