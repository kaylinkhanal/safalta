import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from "redux";
import userSlice from '../reducerSlice/userSlice'
import itemSlice from '../reducerSlice/itemSlice'

import logger from 'redux-logger'


const reducer = combineReducers({
  user: userSlice,
  item: itemSlice
});

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger]
});

export const persistor = persistStore(store)