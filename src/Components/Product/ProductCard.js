import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import WishlistIcon from "../wishlist/WishlistIcon";

const ProductCard = ({ data }) => {
  return (
    <div className=" p-2 min-h-[600px] m-1 w-[350px] flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl relative ">
      <WishlistIcon prod={data} />
      <div className="w-[350px] p-2">
        <img
          className="w-full h-[300px] rounded-lg"
          src={data.images?.[0]}
          alt="prod_image"
        />
      </div>

      <div className="flex flex-col w-full px-4">
        <h3 className="text-2xl mt-2 font-semibold text-left">{data.title}</h3>
        <h2 className="mt-2 text-left text-xl">
          {data.description.length > 60
            ? data.description.slice(0, 60) + "..."
            : data.description}
        </h2>

        <div className="flex items-center text-green-500 text-xl font-bold gap-1 p-0 w-20 py-0 mt-2 rounded-md">
          <h2 className="mt-2 text-left">{data.rating}</h2>
          <span>
            <StarIcon sx={{ fontSize: "18px" }} />
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <h1 className="text-3xl font-bold text-left mt-3">
            $
            {Math.floor(
              data.price - (data.price * data.discountPercentage) / 100
            )}
          </h1>
          <strike className="mt-3 text-xl text-gray-500 font-semibold ">
            ${data.price}
          </strike>
          <span className="text-green-800 text-xl mt-3 font-semibold">
            {data.discountPercentage}% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
