"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidOffer } from "react-icons/bi";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const pathName = usePathname();
  const menuItems = [
    { title: "Dashboard", icon: <MdDashboard />, href: "/admin/dashboard" },
    {
      title: "Products",
      icon: <RiShoppingCartFill />,
      href: "/admin/products",
    },
    {
      title: "Offers",
      icon: <BiSolidOffer />,
      href: "/admin/offers",
    },
    { title: "Accounts", icon: <MdManageAccounts />, href: "#" },
    { title: "Transactions", icon: <IoAnalytics />, href: "#" },
    { title: "Setting", icon: <IoSettings />, href: "#" },
  ];
  const [openSetting, setOpenSetting] = useState<boolean>(false);

  const handleOpenSetting = (item: string) => {
    if (item === "Setting") {
      setOpenSetting(!openSetting);
    }
  };
  return (
    <div className=" w-[300px] min-h-screen p-4 shrink-0 hidden md:block">
      <div className="flex items-center gap-4">
        <div className="w-[90px] h-[45px] rounded-lg relative overflow-hidden bg-gray ">
          <Image
            src={"/images/ziara.png"}
            alt="logo"
            className="cursor-pointer"
            fill
          />
        </div>
        <h2 className="text-[25px]"> ORCHIDACEAE </h2>
      </div>
      <ul className="space-y-4 mt-6 w-full">
        {menuItems?.map((menu) => (
          <Link
            key={menu.title}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${
              pathName === menu?.href ? "bg-pink text-white" : "bg-gray"
            }`}
            href={menu?.href}
            onClick={() => handleOpenSetting(menu.title)}
          >
            <div className="text-[20px]">{menu.icon} </div>
            <p>{menu.title} </p>
          </Link>
        ))}
        {openSetting && (
          <div className="w-full px-12 py-2">
            <span
              className="text-topHeadingPrimary cursor-pointer"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              SignOut
            </span>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
