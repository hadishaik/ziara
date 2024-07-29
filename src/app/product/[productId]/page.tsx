import ViewProduct from "@/components/front-end/ViewProduct";
import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <div className=" px-5 text-darkGray pt-5">
        <Link href={"/"} className="hover:text-black">
          Home
        </Link>
        / {params.productId}
      </div>

      <ViewProduct key={params.productId} params={params} />
    </>
  );
};

export default page;
