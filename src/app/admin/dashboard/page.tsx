"use client";

import Popup from "@/components/admin-panel/Popup";
import ProductRow from "@/components/admin-panel/ProductRow";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import { Metadata } from "next";
import { getSession, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export interface IProduct {
  _id: string;
  name: string;
  imgSrc: string;
  price: number;
  category: string;
  quantity: number;
  description: string;
  tags: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get("/api/get_products")
      .then((res: any) => setProducts(res.data))
      .catch((err: any) => console.log(err))
      .finally(() => {
        dispatch(setLoading(false)), setUpdateTable(false);
      });
  }, [updateTable, dispatch]);

  return (
    <div className=" h-[calc(100vh-40px)] bg-white p-4 rounded-lg">
      <h2 className="text-3xl"> All Products </h2>
      <div className="mt-4 h-[calc(100vh-108px)] overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="text-grayText border-t border-[#ececec]">
              <th>SR No.</th>
              <th>Name </th>
              <th>Price</th>
              <th> Picture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: IProduct, index) => (
              <ProductRow
                key={product._id}
                srNo={index + 1}
                product={product}
                setOpenPopUp={setOpenPopUp}
                setUpdateTable={setUpdateTable}
              />
            ))}
          </tbody>
        </table>
      </div>
      {openPopUp && (
        <Popup setOpenPopup={setOpenPopUp} setUpdateTable={setUpdateTable} />
      )}
    </div>
  );
};
export default Dashboard;
