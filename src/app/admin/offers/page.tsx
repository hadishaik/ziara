import OfferForm from "@/components/admin-panel/OfferForm";
import ProductForm from "@/components/admin-panel/ProductForm";
import React from "react";

const Products = () => {
  return (
    <div className="h-[calc(100vh)] w-full grid place-items-center overflow-y-auto p-4 ">
      <div className="bg-white rounded-lg p-5">
        <OfferForm />
      </div>
    </div>
  );
};

export default Products;
