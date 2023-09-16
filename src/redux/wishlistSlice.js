import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishlist",
  initialState: {
    products : []
  },
  reducers: {
    addItem: (state, action) => {
      state.products =  [...state.products , action.payload];
    },
    removeItem : (state , action) =>{
        state.products = state.products.filter((p) => p.id !== action.payload.id)
    }
  },
});

export const { addItem , removeItem} = wishlist.actions;

export default wishlist.reducer;
