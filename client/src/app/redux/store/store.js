import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from '../reducerSlice/userSlice'
import logger from 'redux-logger'


const reducer = combineReducers({
  user: userSlice,
});

const store = configureStore({
  reducer,
  middleware: [logger]
 
});

export default store;