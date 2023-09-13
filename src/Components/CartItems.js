import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartQuantity } from "../redux/cartSlice";
import { removeFromCart } from "../redux/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.Cart?.cartItems);

  const qtyHandler = (e, id) => {
    console.log(e.target.value);
    dispatch(changeCartQuantity({ qty: e.target?.value, id: id }));
  };

  const removeItemFromCartHandler = (prod) => {
    dispatch(removeFromCart(prod));
  };

  if (cart.length === 0) {
    return <h1>Your Cart is Empty</h1>;
  }
  return (
    <div>
      {cart.map((item) => {
        return (
          <div
            className="flex gap-5 bg-gray-100 p-6 border-1 border-black rounded-md items-center mb-4 "
            key={item.id}
          >
            <div>
              <img
                className="w-44 h-44 "
                src={item.thumbnail}
                alt="Product_img"
              />
              <button className="mt-3 p-2 w-full text-xl bg-red-600 rounded-lg text-white"  onClick={() => removeItemFromCartHandler(item)}>Remove From Cart</button>
            </div>
            <div className="">
              <h1 className="text-3xl font-bold">{item.title}</h1>
              <h3 className="text-xl w-[400px] mt-3">{item.description}</h3>
              <h1 className="text-2xl font-semibold mt-3">${item.price}</h1>
            </div>
            <div className="mt-3 ">
              <h1 className="text-center text-xl font-semibold">Quantity</h1>
              <select
                name=""
                id=""
                className="w-10 mt-3"
                value={item.qty}
                onChange={(e) => qtyHandler(e, item.id)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
