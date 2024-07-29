import CheckoutCart from "@/components/front-end/checkout/CheckoutCart";
import PaymentSection from "@/components/front-end/checkout/PaymentSection";
import Steps from "@/components/front-end/checkout/Steps";
import Image from "next/image";
import React from "react";

const CheckOut = () => {
  return (
    <>
      <div className=" flex flex-col items-center shadow-subnav bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="w-[148px] h-[60px] rounded-lg relative overflow-hidden">
          <Image
            src={"/images/orchdaceae.png"}
            alt="logo"
            className="cursor-pointer"
            fill
          />
        </div>
        <Steps />
      </div>
      <div className="container grid lg:grid-cols-2 lg:px-8 xl:px-10 sm:px-4">
        <CheckoutCart />
        {/* Payment Section */}
        <PaymentSection />
      </div>
    </>
  );
};

export default CheckOut;
