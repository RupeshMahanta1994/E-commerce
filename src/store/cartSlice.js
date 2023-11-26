import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], totalQuantity: 0, showCart: false },
  reducers: {
    addToCart(state, actions) {
      const newItem = actions.payload;

      //Check Existing Item
      const existingItem = state.cartItems.find(
        (item) => item.productId == newItem.productId
      );
    },
    removeFromCart() {},
    setShowCart(state) {
      state.showCart = !showCart;
    },
  },
});

const cartActions = cartSlice.actions;

export default cartActions;
