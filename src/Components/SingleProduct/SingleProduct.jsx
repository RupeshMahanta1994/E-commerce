import React from "react";
import phone from "../../assets/phone.png";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const SingleProduct = ({
  productShortName,
  productPrice,
  productImageUrl,
  productId,
  categoryName,
}) => {
  return (
    <>
      <div className="space-y-3">
        <div className="relative bg-gray-200 px-4 py-2 rounded-md">
          <div className="absolute right-2 top-4 bg-white inline-block px-4 py-2 rounded-sm cursor-pointer">
            <FaRegHeart size={"1.2rem"} fill="red" />
          </div>
          <img
            className="w-full h-[300px] object-contain"
            src={productImageUrl}
            alt="product image"
          />
        </div>
        <div>
          <div className="uppercase text-xs  font-semibold text-gray-500 tracking-wider">
            {categoryName}
          </div>
          <div className="capitalize font-semibold">{productShortName}</div>
          <div className="text-sm font-semibold mt-2">{productPrice}</div>
          <button className="  w-full uppercase bg-blue-600 text-xs text-white font-semibold px-8 py-4 mt-4 tracking-widest flex items-center justify-center gap-4 rounded-sm hover:bg-red-500 transition-all">
            add to cart <IoCartOutline size={"19px"} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
