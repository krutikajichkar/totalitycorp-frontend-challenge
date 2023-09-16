import React from "react";
import StarIcon from "@mui/icons-material/Star";
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/wishlistSlice";
const WishlistCard = ({ prod }) => {
    const dispatch = useDispatch();
    const deleteProductHandler = () => {
        dispatch(removeItem(prod))
    }
  return (
   <div className="flex justify-between items-center p-4 border-b-2 ">
     <div className=" flex">
      <div>
        <img className="w-[100px] h-[100px]" src={prod.images?.[0]} alt="" />
      </div>
      <div className="flex flex-col gap-3 justify-start ml-12">
        <h1 className="text-2xl font-semibold">{prod.title}</h1>
        <div className="flex items-center text-green-500 text-xl font-bold gap-1 p-0 w-20 py-0  rounded-md">
          <h2 className=" text-left">{prod.rating}</h2>
          <span>
            <StarIcon sx={{ fontSize: "18px" }} />
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold text-left ">
            $
            {Math.floor(
              prod.price - (prod.price * prod.discountPercentage) / 100
            )}
          </h1>
          <strike className="mt-3 text-xl text-gray-500 font-semibold ">
            ${prod.price}
          </strike>
          <span className="text-green-800 text-xl mt-3 font-semibold">
            {prod.discountPercentage}% off
          </span>
        </div>
      </div>
    </div>
    <div className="text-2xl cursor-pointer" onClick={deleteProductHandler}><AiFillDelete/></div>
   </div>
  );
};

export default WishlistCard;
