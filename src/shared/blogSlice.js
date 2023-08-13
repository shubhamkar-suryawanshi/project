import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items.pop();
      // change the logic
    },
  },
});

export const { addItem, removeItem, clearCart } = blogSlice.actions;

export default blogSlice.reducer;
