import React, { useEffect ,useState} from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const cart = useSelector((store) => store.Cart?.cartItems);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty,0));
  }, [cart]);
  return (
    <div className="bg-white h-96 p-8  w-[30%] sticky top-60 z-2 ">
      <h1 className="text-3xl font-bold">Total Items ({cart?.length})</h1>
      <h2 className="mt-3 text-xl font-semibold">Subtotal : ${total}</h2>
      <button className="mt-5 w-full bg-gray-200 text-black text-lg p-1 rounded-lg ">Proceed to checkout</button>
    </div>
  );
};

export default CartTotal;
