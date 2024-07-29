"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
interface PropTypes {
  menu: string[];
  styles: string;
  ref: React.Ref<HTMLInputElement>;
  setMenuPopup: Dispatch<SetStateAction<boolean>>;
}

const MenuBar: React.FC<PropTypes> = ({ menu, styles, setMenuPopup }) => {
  return (
    <div
      className={`bg-gray w-[190px] shadow-card rounded-md px-6 py-3 min-h-[80px] flex flex-col ${styles}`}
      onMouseEnter={() => setMenuPopup(true)}
      onMouseLeave={() => setMenuPopup(false)}
    >
      {menu?.map((item) => (
        <Link
          href={item === "Dashboard" ? "/admin/dashboard" : "/"}
          key={item}
          className="text-topHeadingSecondary text-lg hover:text-grayText"
        >
          {item}
        </Link>
      ))}
      <span
        className="text-topHeadingSecondary text-lg hover:text-grayText"
        onClick={() => signOut()}
      >
        {" "}
        Sign Out
      </span>
    </div>
  );
};

export default MenuBar;
