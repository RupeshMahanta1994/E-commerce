import React from "react";
import "./CartItem.css";

import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import cartActions from "../../store/cartSlice";
import { MdDeleteForever } from "react-icons/md";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const decreaseQuantityFromCart = () => {
    dispatch(
      cartActions.removeFromCart({
        id: item.id,
      })
    );
  };
  const increaseQuantityFromCart = () => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        price: item.price,
      })
    );
  };

  const removeItemsFromCart = () => {
    dispatch(
      cartActions.deleteItemFromCart({
        id: item.id,
      })
    );
  };
  return (
    <>
      <div className="grid grid-cols-5 border-b py-2">
        <div className=" grid grid-cols-2 gap-4">
          <div>
            <img className="w-[100px] object-contain" src={item.image} alt="" />
          </div>
          <div className="centerDiv text-clip">{item.name}</div>
        </div>
        <div className="centerDiv">${item.price}</div>
        <div className="centerDiv space-x-2 ">
          <div
            className="border p-1 cursor-pointer "
            onClick={decreaseQuantityFromCart}
          >
            <RiSubtractFill />
          </div>
          <div className="border px-2 bg-gray-200">{item.quantity}</div>
          <div className="border p-1 cursor-pointer">
            <IoIosAdd onClick={increaseQuantityFromCart} />
          </div>
        </div>
        <div className="centerDiv">${item.totalPrice}</div>
        <div className="centerDiv cursor-pointer" onClick={removeItemsFromCart}>
          <MdDeleteForever size={"22px"} />
        </div>
      </div>
    </>
  );
};

export default CartItem;
