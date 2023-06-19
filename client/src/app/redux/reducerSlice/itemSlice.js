import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentSelectedItem: {},
  isItemFormOpen: false,
  formDetails: {}
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
  setItemFormDetails:  (state, actions) => {
    return {
      ...state,
      formDetails: actions.payload
    }
},
  clearAllStorage: (state, actions) => {
   return {
    ...initialState
   }
},

  }
});



export const { setItem , setItemFormOpen, setItemFormDetails} = itemSlice.actions;
export default itemSlice.reducer;
