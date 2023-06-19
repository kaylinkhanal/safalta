import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from "redux";
import userSlice from '../reducerSlice/userSlice'
import locationSlice from '../reducerSlice/locationSlice'
import itemSlice from '../reducerSlice/itemSlice'

import logger from 'redux-logger'


const reducer = combineReducers({
  user: userSlice,
  item: itemSlice,
  location: locationSlice
});

const persistConfig = {
  key: 'root',
  storage,
}
const logoutMiddleware = store => next => action => {
  if(action.type==  "user/setLogout"){
    const allState = store.getState()
    const userState = {...allState}
      const userArr = Object.entries(userState)
      userArr.map(item=> {
          item[1] = ''
          return item
      })
      const orgObj = Object.fromEntries(userArr)
      allState.user = orgObj
    action.type = "item/clearAllStorage"
  }
  next(action);
}

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware:  (getDefaultMiddleware) => [...getDefaultMiddleware(), logger, logoutMiddleware],

});



export const persistor = persistStore(store)