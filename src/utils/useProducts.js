import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/productsSlice";

const useProducts = () => {
  const dispatch = useDispatch();
  const category = useSelector((store) => store.category.cat);

  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    await fetch(
      category === "All"
        ? "https://dummyjson.com/products?limit=40"
        : `https://dummyjson.com/products/category/${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        dispatch(addProducts(data.products));
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  return products;
};

export default useProducts;
