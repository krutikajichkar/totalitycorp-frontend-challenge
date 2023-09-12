import { useEffect, useState } from "react";

const useProductDetails = (id) => {
  const [productDetail, setProductDetail] = useState();
  const getProductDetails = async () => {
    await fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductDetail(data))
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return productDetail;
};

export default useProductDetails;
