import React, { useState } from "react";
import { SHOPPING_LOGO } from "../utils/constants";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const cart = useSelector((store) => store.Cart?.cartItems);
  const wishlist = useSelector((store) => store.wishlist?.products)
 
  return (
    <div className="flex justify-around items-center fixed top-0 bg-blue-500 p-8 h-14 w-full z-10">
      <Link to="/">
        <div className="flex items-center cursor-pointer">
          <img
            className="rounded-full w-20    "
            src={SHOPPING_LOGO}
            alt="shopping_logo"
          />
        </div>
      </Link>

      <div className="relative w-3/12">
        <input type="text" placeholder="Search for products " className="px-4 py-2 w-full text-xl"/>
        <div ><AiOutlineSearch className="text-xl absolute right-2 top-3 text-blue-500" /></div>
      </div>

      <div className="inline-flex  gap-8 items-center text-white">
        <Link to="/cart">
          {" "}
          <div className="flex items-center gap-1 relative text-2xl">
            <BsCartFill className="text-3xl"/>
            <p className="absolute -top-3 bg-red-500  rounded-xl px-2 text-lg">{cart.length}</p>
            <span>Cart</span>
          </div>
        </Link>
        <Link to='/wishlist'>
        <span className="text-xl">WishList({wishlist?.length})</span>
        </Link>
        <span className="text-xl">Hello, XYZ</span>
        
      </div>
      
    </div>
  );
};

export default Header;
