import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], totalQuantity: 0, showCart: false },

  reducers: {
    addToCart(state, actions) {
      const newItem = actions.payload;

      //Check Existing Item
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, actions) {
      const newItem = actions.payload;
      //Check Existing Item
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem.quantity == 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== newItem.id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
      console.log(state.showCart);
    },
    deleteItemFromCart(state, actions) {
      const id = actions.payload;
      //Check Existing Item
      const existingItem = state.cartItems.find((item) => item.id === id);

      //decrese total Quantity
      // state.totalQuantity -= existingItem.quantity;
      //Delete item
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    emptyCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.showCart = false;
    },
  },
});

const cartActions = cartSlice.actions;

export default cartActions;
