import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    cat : "All",
  },
  reducers: {
    selectedCategory: (state, action) => {
      state.cat = action.payload;
    },
  },
});

export const { selectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
