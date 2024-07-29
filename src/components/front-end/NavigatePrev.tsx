"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { FaArrowLeftLong } from "react-icons/fa6";

const NavigatePrev = () => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-2 ml-6 pt-4">
      <FaArrowLeftLong
        size={20}
        onClick={() => router.back()}
        className="cursor-pointer"
      />
      Go Back
    </div>
  );
};

export default NavigatePrev;
