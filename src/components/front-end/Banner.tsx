"use client";
import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";

const Banner = () => {
  const [offers, setOffers] = useState([]);
  const [currentSlide, setCurrentSlide] = useState<any>(null);
  const positonRef = useRef(0);

  useMemo(() => {
    if (offers.length < 1) {
      axios
        .get("/api/get_offers")
        .then((res) => setOffers(res.data))
        .catch((err) => console.log(err));
    }
  }, [offers]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (positonRef.current < offers.length - 1) {
        positonRef.current = positonRef.current + 1;
        setCurrentSlide(offers[positonRef.current]);
      } else {
        positonRef.current = 0;
        setCurrentSlide(offers[0]);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [offers]);

  const priImage = `url(${currentSlide?.imgSrc})`;
  return (
    <>
      {offers && (
        <div className="container my-16">
          <div className="">
            <div
              style={{ backgroundImage: priImage }}
              className={`h-[200px] w-full md:h-[300px] bg-cover bg-center p-8 md:p-16 rounded-2xl`}
            >
              <p className="text-gray text-2xl font-medium py-3">
                sale {currentSlide?.discount}% off on store
              </p>
              <h2 className="text-gray font-bold text-xl sm:text-5xl">
                {currentSlide?.name}
              </h2>
              <a
                href="#"
                className="inline-block mt-10 hover:text-topHeadingSecondary text-gray font-medium border-2 border-gray hover:border-2 hover:border-topHeadingSecondary p-2 shadow-subnav rounded-lg"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
