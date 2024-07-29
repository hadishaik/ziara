import React from "react";
import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./FeatureCard";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl drop-shadow-cart" />,
    title: "Free Delivery",
    desc: "On Order over $199.00",
  },
  {
    icon: <RiRefund2Fill className="text-4xl drop-shadow-cart" />,
    title: "Refund",
    desc: "Money back Guarantee",
  },
  {
    icon: <TbDiscount className="text-4xl drop-shadow-cart" />,
    title: "Member Discount",
    desc: "On Order over $299.00",
  },
  {
    icon: <MdSupportAgent className="text-4xl drop-shadow-cart" />,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day",
  },
];

const Feature = () => {
  return (
    <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4 my-8">
      {data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Feature;
