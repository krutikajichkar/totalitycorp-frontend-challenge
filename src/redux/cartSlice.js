import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems:[],
  },
  reducers: {
    addItemsToCart: (state, action) => {
      state.cartItems = [...state.cartItems, {...action.payload , qty:1}];
    },
    removeFromCart : (state,action) => {
      state.cartItems = state.cartItems.filter((i) => i?.id !== action.payload?.id)
    },
    changeCartQuantity : (state,action) => {
      state.cartItems = state.cartItems.filter((i) => i?.id === action.payload?.id ? (i.qty = action.payload.qty) : i.qty )
    }
  },
});

export const { addItemsToCart , removeFromCart , changeCartQuantity} = cartSlice.actions;

export default cartSlice.reducer;
