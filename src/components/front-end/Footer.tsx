"use client";
import { Bodoni_Moda } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";
const Bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  const router = useRouter();
  const footerList = [
    {
      category: "Consumer Policy",
      items: [
        "Cancellation & returns",
        "Terms Of use",
        "Security",
        "Privacy",
        "Sitemap",
        "Grievance redressal",
      ],
    },
    {
      category: "About",
      items: [
        "Contact us",
        "About Us",
        "Careers",
        "Orchedaceae Stories",
        "Press",
        "Corporate Information",
      ],
    },
    {
      category: "HELP",
      items: [
        "Payments",
        "Shipping",
        "cancellation & returns",
        "FAQ",
        "Report",
      ],
    },
  ];

  const handleItemClick = (item: string) => {
    if (item === "About Us") {
      router.push("/aboutus");
    } else if (item === "Careers") {
      router.push("/careers");
    } else {
      router.push("/terms_privacy");
    }
  };
  return (
    <div className="bg-lightPink">
      <div className="container grid md:grid-cols-4 py-10 h-auto md:h-[300px] ">
        <div className=" flex flex-col justify-between ">
          <div className=" flex gap-3 items-center justify-center pt-5">
            <h2
              className={`text-topHeadingPrimary text-2xl xl:text-7xl ${Bodoni.className}`}
            >
              ZIARA
            </h2>
          </div>
        </div>
        {/* Second Celll */}

        {footerList.map((menu) => (
          <div className="pl-[25%] pt-5" key={menu.category}>
            <h2 className="text-xl lg:text-2xl text-darkGray py-2 uppercase">
              {menu.category}
            </h2>
            {menu.items.map((item) => (
              <>
                <span
                  key={item}
                  className="cursor-pointer text-xs lg:text-base truncate ..."
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </span>
                <br />
              </>
            ))}
          </div>
        ))}
      </div>
      <div className="flex gap-1 items-center justify-center py-4">
        <span className=""> 2024 Ziara. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
