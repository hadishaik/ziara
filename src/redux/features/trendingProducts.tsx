import { IProduct } from "@/app/admin/dashboard/page";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Array<any> = [];

export const trendingProduct = createSlice({
  name: "trendingProduct",
  initialState,
  reducers: {
    addTrending: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { addTrending } = trendingProduct.actions;
export default trendingProduct.reducer;
