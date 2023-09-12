import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
    reducer : {
        category : categoriesSlice,
        Products : productsSlice,
    }
})

export default store;