"use client";
import React from "react";
import ShippingMethods from "./ShippingMethods";
import { useAppSelector } from "@/redux/hooks";

const CheckoutCart = () => {
  const products = useAppSelector((state) => state.cartReducer);
  return (
    <div className="px-4 pt-8">
      <p className="text-xl font-medium">Order Summary</p>
      <p className="text-gray-400">
        Check your items. And select a suitable shipping method.
      </p>
      <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        {products
          .slice(0, 2)
          .reverse()
          .map((item: any) => (
            <div
              className="flex flex-col rounded-lg bg-white sm:flex-row"
              key={item?._id}
            >
              <img
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src={item?.imgSrc}
                alt={item?.name}
              />
              <div className="flex w-full flex-col px-4 py-4 gap-1">
                <span className="text-base">{item.category}</span>
                <span className="font-semibold">{item?.title}</span>
                <p className="text-lg font-bold">$ {item.price}.00</p>
              </div>
            </div>
          ))}
      </div>
      <ShippingMethods />
    </div>
  );
};

export default CheckoutCart;
