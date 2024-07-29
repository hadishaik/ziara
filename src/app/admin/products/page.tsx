import ProductForm from "@/components/admin-panel/ProductForm";
import React from "react";

const Products = () => {
  return (
    <div className="h-[calc(100svh)] w-full grid place-items-center overflow-y-auto p-4">
      <ProductForm />
    </div>
  );
};

export default Products;
