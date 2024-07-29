import Link from "next/link";
import React from "react";

const SearchList = ({ item }: any) => {
  return (
    <Link href={`product/${item._id}`} target="_blank">
      <div className="w-[97%] h-[90px] flex mx-auto gap-3 cursor-pointer">
        <div className="w-[40%] h-full">
          <img
            src={item.imgSrc}
            alt={item.name}
            className="w-full h-full rounded-lg "
          />
        </div>
        <div className="">
          <p className="text-base text-grayText">{item.category}</p>
          <p className="text-xl">{item.name}</p>
          <p className="text-errText">${item.price}.00</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchList;
