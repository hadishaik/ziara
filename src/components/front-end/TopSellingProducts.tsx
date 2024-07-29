"use client";
import React, { useEffect, useRef, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { useAppSelector } from "@/redux/hooks";

const TopSellingProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const trendingProducts = useAppSelector((state) => state.trendingReducer);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomproducts = (count: number) => {
    const result = new Set();
    while (result.size < count && result.size < trendingProducts.length) {
      const ranIndex = Math.floor(Math.random() * trendingProducts?.length);
      result.add(trendingProducts[ranIndex]);
    }
    return Array.from(result);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const randomProducts = getRandomproducts(4);
      setProducts(randomProducts);
    }, 2000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [trendingProducts]);

  return (
    <div className="container my-16">
      <div className="sm:flex justify-between items-center">
        <h1 className="text-[40px] font-normal">Top Rated Products</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8">
        {products.map((item: any) => (
          <Product
            key={item._id}
            description={item.description}
            tags={item.tags}
            id={item._id}
            imgSrc={item.imgSrc}
            category={item.category}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
