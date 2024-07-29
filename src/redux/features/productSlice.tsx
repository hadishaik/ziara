import { IProduct } from "@/app/admin/dashboard/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  id: "",
  imgSrc: "",
  name: "",
  price: 0,
  category: "",
  quantity: 0,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
