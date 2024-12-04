import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductReducer";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
