import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import categorySlice from "../features/category/categorySlice";
import  currencySlice  from "../features/currency/currencySlice";
import productSlice from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    product: productSlice,
    currency: currencySlice,
    cart: cartSlice
  },
});
