import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import useProducts from "../../utils/useProducts";
import { useSelector } from "react-redux";

const ProductList = () => {
  useProducts();
  const Products = useSelector((store) => store.Products?.products);

  return (
    <div className=" flex flex-wrap w-full min-h-[100vh] bg-white p-3  justify-center ">
      {Products?.map((prod) => {
        return (
          <Link key={prod.id} to={`/product/${prod.id}`}>
            <ProductCard data={prod} />
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
