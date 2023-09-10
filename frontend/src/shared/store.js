import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import blogSlice from './blogSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    blog: blogSlice,
    user: userSlice,
  },
});

export default store;
