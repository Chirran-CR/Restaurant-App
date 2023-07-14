import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'croot',
  storage,
}


const rootReducers = combineReducers( {
  user : userSliceReducer,
  product : productSlideReducer
  
})
const persistedReducer = persistReducer(persistConfig, rootReducers)
export const store = configureStore({
  // reducer: {
  //   user : userSliceReducer,
  //   product : productSlideReducer
    
  // },
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
export const persistor = persistStore(store)