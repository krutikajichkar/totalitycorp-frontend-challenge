import React from "react";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = ({ imgUrl, title, description, ratings, price }) => {
  return (
    <div className="py-4 rounded-lg bg-slate-200 w-[400px] flex flex-col justify-center items-center cursor-pointer">
      <div className="w-[350px] ">
        <img
          className="w-full h-[300px] rounded-lg"
          src={imgUrl}
          alt="prod_image"
        />
      </div>

      <div className="flex flex-col w-full px-4">
        <h3 className="text-2xl mt-2 font-semibold text-left">{title}</h3>
        <h2 className="mt-2 text-left text-xl">{description}</h2>

        <div className="flex items-center text-green-500 text-xl font-bold gap-1 p-0 w-20 py-0 mt-2 rounded-md">
          <h2 className="mt-2 text-left">{ratings}</h2>
          <span>
            <StarIcon sx={{fontSize:'18px'}}/>
          </span>
        </div>

        <div>
          <h3 className="text-2xl mt-2 font-semibold text-left">${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
