import { IProduct } from "@/app/admin/dashboard/page";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// interface IProduct {
//   id: string;
//   title: string;
//   img: string;
//   price: number;
//   quantity: number;
// }
const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      if (state.findIndex((pro) => pro._id === action.payload._id) === -1) {
        console.log("i am true from this jbjnb");
        state.push(action.payload);
      } else {
        return state.map((item) => {
          return item._id === action.payload._id
            ? {
                ...item,
                quantity: action.payload.quantity,
              }
            : item;
        });
      }
    },
    removeFromcart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return state.filter((item) => item._id !== id);
    },
  },
});

export const { addToCart, removeFromcart } = cartSlice.actions;
export default cartSlice.reducer;
