import { addToCart, removeFromcart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import React from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

interface PropsType {
  id: string;
  imgSrc: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
  tags: string;
}

const CartProduct: React.FC<PropsType> = ({
  id,
  imgSrc,
  name,
  price,
  quantity,
  category,
  description,
  tags,
}) => {
  const dispatch = useAppDispatch();
  const handleQuantity = (qua: number) => {
    const payLoad = {
      _id: id,
      imgSrc,
      name,
      price,
      category,
      quantity:
        qua === 1 ? quantity + 1 : quantity > 1 ? quantity - 1 : quantity,
      description,
      tags,
    };
    dispatch(addToCart(payLoad));
  };
  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center gap-6">
        <div className="relative w-[75px] h-[108px] ">
          <Image
            src={imgSrc}
            alt="product-Img"
            fill
            sizes="100vw"
            className="rounded-lg object-contain"
          />
        </div>
        <div className="space-y-2 w-[100px] truncate ...">
          <h3 className="font-medium">{name}</h3>
          <div className="flex items-center gap-3 px-4">
            <FaMinusCircle
              className="cursor-pointer hover:scale-105"
              onClick={() => handleQuantity(0)}
            />
            {quantity}
            <FaPlusCircle
              className="cursor-pointer hover:scale-105"
              onClick={() => handleQuantity(1)}
            />
          </div>
        </div>
        <div className="">
          <p className="text-darkGray text-[14px] font-bold">
            ${quantity * price}.00
          </p>
        </div>
      </div>
      <MdDelete
        className="cursor-pointer text-errText hover:scale-105 hover:-rotate-6 "
        size={30}
        onClick={() => dispatch(removeFromcart(id))}
      />
    </div>
  );
};

export default CartProduct;
