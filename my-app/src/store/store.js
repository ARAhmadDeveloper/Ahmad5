import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
// import { addToCart } from "./slices/cartSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cartProduct: cartReducer,
  },
});
