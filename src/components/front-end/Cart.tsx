"use client";
import { useAppSelector } from "@/redux/hooks";
import React, { Dispatch, SetStateAction } from "react";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PropsType {
  setShowcart: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ setShowcart }: PropsType) => {
  const products = useAppSelector((state) => state.cartReducer);
  const router = useRouter();

  const getTotal = () => {
    let total = 0;
    products?.forEach((item) => (total = total + item?.price * item?.quantity));
    return total;
  };

  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowcart(false)}
        />
        <h3 className="pt-6 text-xl font-bold text-darkGray uppercase">
          Your Cart
        </h3>
        <div className="mt-6 space-y-2">
          {products?.map((item) => {
            return (
              <CartProduct
                key={item?._id}
                id={item?._id}
                imgSrc={item?.imgSrc}
                name={item?.name}
                price={item?.price}
                quantity={item?.quantity}
                category={item.category}
                description={item.description}
                tags={item.description}
              />
            );
          })}
        </div>
        <div className="flex justify-between items-center font-medium text-xl py-4">
          <p>Total:</p>
          <p>${getTotal()}.00</p>
        </div>

        <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-pink mb-4 mt-4">
          View cart
        </button>
        <button
          className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-pink mb-4 mt-4"
          onClick={() => router.push("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
