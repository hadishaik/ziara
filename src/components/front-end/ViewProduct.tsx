"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";

const ViewProduct = ({ params }: any) => {
  const [product, setProduct] = useState<any>({});
  useMemo(() => {
    axios
      .get(`/api/get_product?id=${params.productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <>
      <div className="container grid md:grid-cols-[45%,50%] gap-8 py-8">
        <div className="w-full h-[calc(80svh)] relative">
          <Image
            src={product?.imgSrc}
            alt={product?.name}
            fill
            sizes="100vh"
            loading="eager"
            className="object-contain"
          />
          <div className=" h-[30px] px-5 rounded-full border-2 border-topHeadingPrimary absolute top-[3%] left-[15%]">
            {" "}
            Best Seller{" "}
          </div>
        </div>
        <div className="py-5 flex flex-col justify-between ">
          <div className="">
            <p className="text-lg text-grayText">
              {product.category} - {product.tags}
            </p>
            <p className="text-3xl ">{product.name}</p>
            <div className="flex gap-1 pt-7 items-center">
              {" "}
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar /> <span className="pl-2">Based on 3 - Reviews</span>
            </div>

            <p className="text-2xl text-errText py-3 ">${product.price}.00</p>

            <p className="text-2xl"> Description</p>
            <p className="whitespace-pre-line text-xl">{product.description}</p>
          </div>
          <div className="w-full">
            <h2 className="text-2xl">Sizes</h2>
            <div className="w-[300px] h-[30px]  grid grid-cols-5 gap-4 text-lg">
              <div className="rounded-full border-2 border-topHeadingPrimary text-center p-1">
                S
              </div>
              <div className="rounded-full border-2 border-topHeadingPrimary text-center p-1">
                M
              </div>
              <div className="rounded-full border-2 border-topHeadingPrimary text-center p-1">
                L
              </div>
              <div className="rounded-full border-2 border-topHeadingPrimary text-center p-1">
                XL
              </div>
              <div className="rounded-full border-2 border-topHeadingPrimary text-center p-1">
                XXL
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <img
              src="/Icons/Liked.png"
              alt="like"
              className="w-[45px] h-[45px] cursor-pointer"
            />
            <button className="w-1/2 h-[48px] bg-lightPink rounded-lg cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
