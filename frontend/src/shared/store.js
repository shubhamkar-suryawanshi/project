import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import blogSlice from './blogSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    blog: blogSlice,
    auth: authSlice,
  },
});

export default store;
