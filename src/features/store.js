import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import authReducer from './auth/authSlice';
import wishlistReducer from './wishlist/wishlistSlice';
import movieReducer from './movie/moviesSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'wishlist'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  wishlist: wishlistReducer,
  movies: movieReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };