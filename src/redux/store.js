import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";


const store = configureStore({
    reducer : {
        category : categoriesSlice,
        Products : productsSlice,
        Cart : cartSlice,
        wishlist : wishlistSlice,
       
    }
})

export default store;