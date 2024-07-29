import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productReducer from "./features/productSlice";
import loadingReducer from "./features/loadingSlice";
import trendingReducer from "./features/trendingProducts";

export const store = configureStore({
  reducer: {
    cartReducer,
    productReducer,
    loadingReducer,
    trendingReducer,
  },
  devTools: process.env.DEVELOPMENT !== "Production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
