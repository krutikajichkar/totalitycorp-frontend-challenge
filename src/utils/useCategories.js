import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    await fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
};

export default useCategories;
