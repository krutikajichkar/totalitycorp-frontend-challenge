import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products : [],
    
    filteredPrice:0,
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    getFileteredProducts : (state , action) => {
      state.products = state.products.filter(p => p.rating > action.payload);
      
    },
    getFilteredPrice : (state , action) => {
      state.products = state.products.filter(p => p.price <= action.payload)
    },
    sortByAscending : (state) => {
      state.products = state.products.sort((a,b) => a.price - b.price) ;
      
    },
    sortByDescending : (state) => {
      state.products = state.products.sort((a,b) => b.price - a.price)
      
    }
    
  },
});

export const { addProducts , getFileteredProducts , getFilteredPrice , sortByAscending , sortByDescending} = productsSlice.actions;

export default productsSlice.reducer;
