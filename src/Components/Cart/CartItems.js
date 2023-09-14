import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartQuantity } from "../../redux/cartSlice";
import { removeFromCart } from "../../redux/cartSlice";

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
    <div className="overflow-y-scroll max-h-[800px] w-[50%] bg-white scrollbar-hide">
      {cart.map((item) => {
        return (
          <div
            className="flex  bg-white p-6 gap-5  items-center border-b-2 border-gray-300  "
            key={item.id}
          >
            <div>
              <img
                className="w-44 h-44 "
                src={item.thumbnail}
                alt="Product_img"
              />
              <button
                className="mt-3 p-2 w-full text-xl bg-red-600 rounded-lg text-white"
                onClick={() => removeItemFromCartHandler(item)}
              >
                Remove From Cart
              </button>
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
      <div className="  bg-white p-4 sticky top-64 z-2 bottom-0 right-0 left-0  shadow-stone-800 shadow-lg text-right">
        <button className="px-4 py-2 text-xl bg-orange-500 text-white">Place Order</button>
      </div>
      
    </div>
  );
};

export default CartItems;
