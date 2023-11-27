import React from "react";
import HeroImg from "../../assets/HeroImg.png";
import "./HomePage.css";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import AllProducts from "../../Components/AllProducts/AllProducts";
import Cart from "../../Components/Cart/Cart";
import { useSelector } from "react-redux";

const HomePage = () => {
  const setShowCart = useSelector((state) => state.cart.showCart);
  return (
    <>
      <div>
        <div className="w-full h-[100vh] HeroSection grid grid-cols-2 ">
          <div className=" flex flex-col items-center justify-center ">
            <div className="space-y-12">
              <div className="space-y-3">
                <p className="uppercase text-xs text-gray-500 font-bold">
                  samsung
                </p>
                <h1 className="text-5xl capitalize font-bold tracking-wide">
                  new collection
                </h1>
              </div>
              <button className="uppercase bg-red-500 font-semibold text-sm text-white px-8 py-3">
                view collection
              </button>
            </div>
          </div>
          <div className="   flex items-center justify-center">
            <img className="w-96 object-contain" src={HeroImg} alt="" />
          </div>
        </div>
        <div className="px-10">
          <div className="capitalize text-xl font-bold  flex items-center justify-center my-10 tracking-wider">
            {" "}
            pupular product
          </div>
          <div>
            <AllProducts />
          </div>
          {setShowCart && (
            <div className="fixed -top-2  left-0 right-0 m-auto bg-gray-100">
              <Cart />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
