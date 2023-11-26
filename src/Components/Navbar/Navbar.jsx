import React from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../store/AuthSlice";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  //Logout
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <>
      <nav className="w-[100vw] bg-slate-100 flex items-center justify-between px-28 py-4 fixed z-10">
        <div className="flex items-center gap-10 text-lg font-bold text-gray-500 capitalize tracking-wide">
          <div className="text-3xl italic text-red-500 font-extrabold tracking-wider">
            <a href="">ESSENCE</a>
          </div>
          <div className="cursor-pointer">
            <a href="/">shop</a>
          </div>
          <div className="cursor-pointer">
            <a href="#">Pages</a>
          </div>
          <div className="cursor-pointer">
            <a href="#">Blog</a>
          </div>
          <div className="cursor-pointer">
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="cursor-pointer">
            <FaRegHeart size={"1.5em"} color="rgb(239,68,68)" />
          </div>
          <div className="cursor-pointer">
            <FaRegUser size={"1.5em"} />
          </div>
          <div className="relative cursor-pointer">
            <div className="absolute w-6 h-6  rounded-full flex items-center justify-center  -top-3 -right-3 bg-slate-400">
              3
            </div>
            <IoCartOutline size={"1.5em"} />
          </div>
          {isLoggedIn && (
            <button
              className="uppercase bg-red-500 font-semibold text-xs text-white px-4 py-2 rounded-sm"
              onClick={logoutHandler}
            >
              log out
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
