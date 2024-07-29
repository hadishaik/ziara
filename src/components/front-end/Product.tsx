"use client";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { TbShoppingCartCopy } from "react-icons/tb";

interface PropsType {
  id: string;
  imgSrc: string;
  category: string;
  name: string;
  price: number;
  description: string;
  tags: string;
}

const Product = ({
  id,
  imgSrc,
  category,
  price,
  name,
  description,
  tags,
}: PropsType) => {
  const [hover, setHover] = useState(false);
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cartReducer);

  const addToCartProduct = () => {
    const payLoad = {
      _id: id,
      imgSrc,
      name,
      description,
      tags,
      price,
      category,
      quantity: 1,
    };
    dispatch(addToCart(payLoad));
  };
  const filter = products?.some((pro) => pro?._id === id);
  return (
    <div
      className="bg-black bg-opacity-70 h-[450px] rounded-lg relative overflow-hidden cursor-pointer hover:scale-110 hover:ease-in-out hover:duration-500 shadow-subnav"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link href={`/product/${id}`} target="_blank">
        <Image
          src={imgSrc}
          alt="Product-Image"
          fill
          sizes="100vw"
          className=""
        />
      </Link>
      {hover && (
        <div
          className="w-full h-[25%] absolute bottom-0 ease-in duration-1000 bg-topHeadingSecondary bg-opacity-60 grid grid-cols-[70%,30%]"
          id="product-Desc"
        >
          <div className="px-3">
            <p className="text-grayText py-1"> {category}</p>
            <h2 className="text-gray text-2xl truncate">{name}</h2>
            <h2 className="font-medium text-pink text-lg pt-1">$ {price}.00</h2>
          </div>
          <div className=" w-full h-full flex justify-end items-center px-4">
            <div className="bg-pink text-white px-2 py-2 cursor-pointer hover:bg-accent rounded-md w-[45px] h-[45px] z-30">
              {filter ? (
                <TbShoppingCartCopy size={27} />
              ) : (
                <AiOutlineShoppingCart
                  size={25}
                  onClick={addToCartProduct}
                  className=""
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

//   <div className="px-2 py-1">
//     <p className="text-grayText text-[14px] font-medium">{category}</p>
//     {/* <div className="flex items-center text-[#ffb21d] mt-3">
//       <AiFillStar />
//       <AiFillStar />
//       <AiFillStar />
//       <AiFillStar />
//       <AiOutlineStar />
//       <p className="text-grayText text-[14px] ml-2">(3 Review)</p>
//     </div> */}
//     <h2 className="font-medium text-[24px] text-gray">{title}</h2>
//     <div className="flex justify-between items-ceter">
//       <h2 className="font-medium text-pink text-lg pt-1">
//         $ {price}.00
//       </h2>
//       <div className="bg-pink text-white px-2 py-2 cursor-pointer hover:bg-accent rounded-md">
//         {filter ? (
//           <TbShoppingCartCopy size={20} />
//         ) : (
//           <AiOutlineShoppingCart size={20} onClick={addToCartProduct} />
//         )}
//       </div>
//     </div>
//   </div>
