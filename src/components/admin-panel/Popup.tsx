"use client";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import axios from "axios";
import React, {
  SetStateAction,
  useState,
  Dispatch,
  useDeferredValue,
} from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface PropsType {
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

const Popup: React.FC<PropsType> = ({
  setOpenPopup,
  setUpdateTable,
}: PropsType) => {
  const productData = useAppSelector((state) => state.productReducer);
  console.log(productData, "i am product Data");
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState({
    name: productData.name,
    categoty: productData.category,
    price: productData.price,
  });
  const debouncedValue = useDeferredValue(inputData);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(setLoading(true));
    axios
      .put(`/api/edit_product/${productData._id}`, debouncedValue)
      .then((res) => setUpdateTable(true))
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch(setLoading(false));
        setOpenPopup(false);
      });
  };
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black grid place-items-center">
      <div className="bg-white w-[700px] py-8 rounded-lg text-center relative">
        <IoIosCloseCircleOutline
          className="absolute text-2xl right-0 top-0 m-4 cursor-pointer hover:text-pink"
          onClick={() => setOpenPopup(false)}
        />
        <h2 className="text-2xl -mt-3">Edit product</h2>
        <form className="mt-6 w-fit space-y-4 mx-auto" onSubmit={handleSubmit}>
          <input
            className="border block border-darkGray outline-none px-4 py-2 rounded-lg w-fit"
            type="text"
            placeholder="name"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
            required
          />
          <input
            className="border block border-darkGray outline-none px-4 py-2 rounded-lg w-fit"
            type="text"
            placeholder="category"
            value={inputData.categoty}
            onChange={(e) =>
              setInputData({ ...inputData, categoty: e.target.value })
            }
            required
          />
          <input
            className="border block border-darkGray outline-none px-4 py-2 rounded-lg w-fit"
            type="number"
            placeholder="price"
            value={inputData.price}
            onChange={(e) =>
              setInputData({ ...inputData, price: parseInt(e.target.value) })
            }
            required
          />
          <div className="flex justify-end">
            <button className="bg-accent text-white px-8 py-2 rounded-lg self-center">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
