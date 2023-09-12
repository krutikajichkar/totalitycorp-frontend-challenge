import React from "react";
import useProductDetails from "../utils/useProductDetails";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../redux/cartSlice";

const ProductDetails = () => {
    const dispatch = useDispatch()
  const { id } = useParams();
  const receivedProductDetails = useProductDetails(id);
  const cartHandler = () => {
    dispatch(addItemsToCart(receivedProductDetails))
  }
  return ( 
    <div className=" sm:mt-[150px] mt-[100px] max-w-[1200px] mx-auto px-2 ">
      <div className=" w-full bg-gray-100 flex flex-col sm:flex-row gap-4 p-4 h-auto mb-5 sm:mb-0 sm:h-[600px]  rounded-lg">
        <div>
          <img
            className="w-[800px] h-full rounded-md"
            src={receivedProductDetails?.thumbnail}
            alt=""
          />
        </div>
        <div className=" p-6  w-full text-left">
          <h1 className="text-3xl font-bold text-left">
            {receivedProductDetails?.title}
          </h1>
          <h2 className="text-xl mt-3 text-left">
            {receivedProductDetails?.description}
          </h2>
          <div className="flex items-center  text-green-800 text-xl font-bold gap-1 p-0 w-20 py-0 mt-2 rounded-md">
            <h2 className="mt-2 text-left">{receivedProductDetails?.rating}</h2>
            <span>
              <StarIcon sx={{ fontSize: "18px" }} />
            </span>
          </div>
          <h1 className="italic text-xl text-left mt-3 font-semibold text-gray-400">
            {" "}
            Sold by {receivedProductDetails?.brand}
          </h1>
          <div className="flex gap-4 items-center">
            <h1 className="text-4xl font-bold text-left mt-3">
              $
              {Math.floor(
                receivedProductDetails?.price -
                  (receivedProductDetails?.price *
                    receivedProductDetails?.discountPercentage) /
                    100
              )}
            </h1>
            <strike className="mt-3 text-xl text-gray-500 font-semibold ">
              ${receivedProductDetails?.price}
            </strike>
            <span className="text-green-800 text-xl mt-3 font-semibold">
              {receivedProductDetails?.discountPercentage}% off
            </span>
          </div>
          <button onClick={cartHandler} className="w-full mt-12 text-xl font-semibold bg-orange-400 text-white py-2 rounded-md">
            Add To Cart
          </button>
          <button className="w-full mt-3 text-xl font-semibold bg-yellow-400 text-white py-2 rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
