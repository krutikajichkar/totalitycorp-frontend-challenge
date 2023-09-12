import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems:[],
  },
  reducers: {
    addItemsToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { addItemsToCart } = cartSlice.actions;

export default cartSlice.reducer;
