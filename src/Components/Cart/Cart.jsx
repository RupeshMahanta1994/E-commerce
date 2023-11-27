import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const calculateTotalPrice = () => {
    const sum = cartItems?.reduce(
      (acc, current) => acc + current.totalPrice,
      0
    );
    setTotalPrice(sum);
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  return (
    <>
      <div className="w-full  flex items-center justify-center pt-10">
        <div className="mx-12 my-5  py-4  ">
          <h1>Cart</h1>
          {cartItems.length !== 0 ? (
            <>
              <div className="grid grid-cols-5 text-center py-3 uppercase font-bold text-xs text-gray-600 tracking-wider border">
                <div className="col-span-2">product</div>
                <div>quantity</div>

                <div>total</div>
                <div></div>
              </div>
              <div className="px-4">
                {cartItems.map((item) => (
                  <>
                    <CartItem item={item} />
                  </>
                ))}
                <div className="flex items-center justify-between mt-3">
                  <div>Total Price</div>
                  <div>${totalPrice}</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1>Please add something to cart</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
