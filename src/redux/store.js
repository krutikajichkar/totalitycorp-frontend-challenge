import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        category : categoriesSlice,
        Products : productsSlice,
        Cart : cartSlice,
    }
})

export default store;