import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: '',
  isLoggedIn: false,
  userName: '',
  id: '',
  role: ''
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
    }
  }
});

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;
