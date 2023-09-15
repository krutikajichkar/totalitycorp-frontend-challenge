import React,{useState} from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import useProducts from "../../utils/useProducts"
import { useSelector } from "react-redux";

const ProductList = () => {
   useProducts();
  const Products = useSelector(store => store.Products?.products);
  const filteredProducts = useSelector(store => store.Products?.filteredProducts);
  const filteredPrice = useSelector(store => store.Products?.filteredPrice)

  const receivedProducts = filteredProducts.length === 0  ? Products : filteredProducts;
  

  
  
  return (
    <div className=" flex flex-wrap w-full min-h-[100vh] bg-white p-3  justify-center ">
      {receivedProducts?.map((prod) => {
        return (
          <Link key={prod.id} to={`/product/${prod.id}`}>
            <ProductCard
              imgUrl={prod?.images[0]}
              title={prod.title}
              ratings={prod.rating}
              price={prod.price}
              description={prod.description}
              discountPercentage = {prod.discountPercentage}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
