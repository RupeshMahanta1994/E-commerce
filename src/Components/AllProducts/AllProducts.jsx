import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import axios from "axios";

const AllProducts = () => {
  const [allProducts, setAllproducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts"
      );
      setAllproducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
    console.log(allProducts);
  }, []);

  return (
    <>
      <div className="w-full grid gap-10 grid-cols-4 ">
        {allProducts &&
          allProducts.map((product) => (
            <SingleProduct
              productShortName={product.productShortName}
              productPrice={product.productPrice}
              productImageUrl={product.productImageUrl}
              productId={product.productId}
              categoryName={product.categoryName}
              key={product.productId}
            />
          ))}
      </div>
    </>
  );
};

export default AllProducts;
