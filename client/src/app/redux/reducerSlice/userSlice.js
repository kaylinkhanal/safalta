import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: '',
  isLoggedIn: false,
  userName: '',
  id: '',
  role: '',
  firstName: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, actions) => {
      const {msg, ...userData} = actions.payload
     
     return {
       ...state,
       ...userData
     }
    },
    setLogout:  (state, actions) => {
      return {
        ...initialState
      }
    }
  }
});



export const { setLogin,setLogout } = userSlice.actions;
export default userSlice.reducer;
