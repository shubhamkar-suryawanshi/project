import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    getTotal: (state) => {
      let { totalPrice } = state.items.reduce((total, current) => {
        return (total = total + current);
      }, 0);
      state.totalPrice = parseInt(totalPrice.toFixed(2));
    },
  },
});

export const { addItem, removeItem, clearCart, getTotal } = cartSlice.actions;

export default cartSlice.reducer;
