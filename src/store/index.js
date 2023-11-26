import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice";
import { cartSlice } from "./cartSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
