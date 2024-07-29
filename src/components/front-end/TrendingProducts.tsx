import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { addTrending } from "@/redux/features/trendingProducts";
import { useAppSelector } from "@/redux/hooks";
interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  category: string;
  price: number;
  description: string;
  tags: string;
}

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const trendingProducts = useAppSelector((state) => state.trendingReducer);

  useEffect(() => {
    axios
      .get("/api/get_products")
      .then((res) => {
        console.log(res.data);
        dispatch(addTrending(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-16">
      <div className="sm:flex justify-between items-center">
        <h1 className="text-[40px] font-normal">Trending Products</h1>
        <div className="text-darkGray flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text-black hover:text-darkGray cursor-pointer">
            New
          </div>
          <div className="hover:text-black cursor-pointer">Featured</div>
          <div className="hover:text-black cursor-pointer">Top Sellers</div>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8">
        {trendingProducts.map((item: IProduct) => (
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

export default TrendingProducts;
