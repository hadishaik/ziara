"use client";
import Banner from "@/components/front-end/Banner";
import Cart from "@/components/front-end/Cart";
import Feature from "@/components/front-end/Feature";
import Footer from "@/components/front-end/Footer";
import Hero from "@/components/front-end/Hero";
import NavBar from "@/components/front-end/NavBar";
import TopSellingProducts from "@/components/front-end/TopSellingProducts";
import TrendingProducts from "@/components/front-end/TrendingProducts";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  const products = useAppSelector((state) => state.cartReducer);

  useEffect(() => {
    if (products.length < 1) {
      setShowCart(false);
    }
  }, [products]);
  return (
    <main className="">
      <NavBar setShowCart={setShowCart} showCart={showCart} />
      {showCart && <Cart setShowcart={setShowCart} />}
      <Hero />
      <Feature />
      <TrendingProducts />
      <TopSellingProducts />
      <Banner />
      <Footer />
    </main>
  );
}
