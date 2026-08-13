import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import wishlistReducer from "./wishlistSlice";
import orderReducer from "./orderSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    orders: orderReducer,
  },
});