import React from "react";
interface PropsType {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard = ({ icon, title, desc }: PropsType) => {
  return (
    <div className="flex gap-3 bg-gray px-14 py-6 rounded-lg drop-shadow-cart items-center">
      {icon}
      <div>
        <h2 className="font-medium text-xl">{title}</h2>
        <p className="text-darkGray">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
