import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import blogSlice from "./blogSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    blog: blogSlice,
  },
});

export default store;
