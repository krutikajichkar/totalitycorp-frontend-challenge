import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilteredPrice, sortByAscending, sortByDescending } from "../../redux/productsSlice";

const Price = () => {
  const dispatch = useDispatch();
  const [range, setRange] = useState(0);
  const rangeHandler = (e) => {
    setRange(e.target.value);
    dispatch(getFilteredPrice(e.target.value * 30));
  };
  return (
    <div className="px-4 py-2">
      <div className="w-[300px]">
        <input
          type="range"
          className="w-full"
          value={range}
          onChange={rangeHandler}
        />
        <div className="w-full flex justify-between">
          <span>30</span>
          <span>3000</span>
        </div>
        <h1 className="mt-3 text-xl">Selected Range : ${range * 30}</h1>
      </div>
      <div className="mt-3 text-xl flex flex-col font-semibold gap-2 cursor-pointer">
        <p onClick={() => dispatch(sortByDescending())}>High To Low</p>
        <p onClick={() => dispatch(sortByAscending())}>Low To High</p>
      </div>
    </div>
  );
};

export default Price;
