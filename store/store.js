import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import authSlice from './slices/auth-slice';
import cartReducer from './slices/cart-slice';
import compareReducer from './slices/compare-slice';
import productReducer from './slices/product-slice';
import wishlistReducer from './slices/wishlist-slice';
import storage from './sync_storage';


const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['auth'],
};

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  compare: compareReducer,
  auth: authSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

// Optional manual sync with localStorage
// Client-side `localStorage` update based on state change
if (typeof window !== 'undefined') {
  store.subscribe(() => {
    const state = store.getState();
    if (state.auth.isLoggedIn) {
      localStorage.setItem('authUser', JSON.stringify(state.auth.user));
    } else {
      localStorage.removeItem('authUser');
    }
  });
}
