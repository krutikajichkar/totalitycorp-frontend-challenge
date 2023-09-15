import React, { useState } from "react";
import useCategories from "../../utils/useCategories";
import { useDispatch, useSelector } from "react-redux";
import { selectedCategory } from "../../redux/categoriesSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const filt = useSelector((store) => store.filter);
  const recievedCategories = useCategories();

  const categoryHandler = (name) => {
    dispatch(selectedCategory(name));
  };

  return (
    <div>
        <div
        className=" px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
        onClick={() => categoryHandler("All")}
      >
        All
      </div>
      {recievedCategories.map((cat, index) => {
        return (
          <div
            className=" px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
            onClick={() => categoryHandler(cat)}
            key={index}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </div>
        );
      })}
    
    </div>
  );
};

export default Categories;
