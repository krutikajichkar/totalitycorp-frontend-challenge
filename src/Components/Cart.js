import React from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((store) => store.Cart?.cartItems);
  return (
    <div className="mt-[140px] ">
      
      {cart.length === 0 ? (
        <h1 className="text-4xl font-bold absolute top-[50%] left-[40%]">Your Cart is Empty</h1>
      ) : (
       <>
        <h1 className="text-3xl text-left font-bold px-8">Your Items</h1>
        <div className="flex flex-col sm:flex-row w-full  p-10 justify-around">
          <CartItems />
          <CartTotal />
        </div>
       </>
      )}
    </div>
  );
};

export default Cart;
