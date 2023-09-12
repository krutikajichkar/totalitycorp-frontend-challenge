import React from "react";
import useCategories from "../utils/useCategories";
import { useDispatch } from "react-redux";
import { selectedCategory } from "../redux/categoriesSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const recievedCategories = useCategories();

  const categoryHandler = (name) => {
    dispatch(selectedCategory(name));
  };

  const scrollLeftHandler = () => {
    let slider = document.getElementById("scrollLeft");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const scrollRightHandler = () => {
    let slider = document.getElementById("scrollRight");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {recievedCategories.map((cat, index) => {
        return (
          <div
            className="bg-gray-100 px-4 py-2 rounded-lg cursor-pointer"
            onClick={() => categoryHandler(cat)}
            key={index}
          >
            {cat}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
