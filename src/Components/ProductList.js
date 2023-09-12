import React from "react";
import useProducts from "../utils/useProducts";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const receivedProducts = useProducts();
  console.log(receivedProducts);
  return (
    <div className=" mt-10 flex gap-3 flex-wrap justify-center">
      {receivedProducts.map((prod) => {
        return (
          <ProductCard
            key={prod.id}
            imgUrl={prod?.images[0]}
            title={prod.title}
            ratings={prod.rating}
            price={prod.price}
            description={prod.description}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
