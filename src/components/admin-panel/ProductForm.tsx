"use client";
import { UploadButton } from "@/app/utils/uploadthing";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";

interface IPayload {
  imgSrc: null | string;
  filekey: null | string;
  name: string;
  category: string;
  price: string;
  tags: string;
  description: string;
}

const ProductForm = () => {
  const [payLoad, setPayLoad] = useState<IPayload>({
    imgSrc: null,
    filekey: null,
    name: "",
    category: "",
    price: "",
    tags: "",
    description: "",
  });
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(payLoad, "i am payload");
    const isValidForm = (field: any) =>
      field !== null && field !== undefined && field !== "";
    if (
      // isValidForm(payLoad.name) &&
      // isValidForm(payLoad.category) &&
      isValidForm(payLoad.imgSrc)
      // isValidForm(payLoad.price)
    ) {
      dispatch(setLoading(true));
      axios
        .post("/api/add_product", payLoad)
        .then((res) =>
          setPayLoad({
            imgSrc: null,
            filekey: null,
            name: "",
            category: "",
            price: "",
            tags: "",
            description: "",
          })
        )
        .catch((err) => console.error(err))
        .finally(() => dispatch(setLoading(false)));
    } else {
      setError(true);
    }
  };

  const handleUploadImage = (res: any) => {
    setPayLoad({ ...payLoad, imgSrc: res[0].url, filekey: res[0].key });
    setError(false);
  };
  return (
    <>
      <div className="rounded-lg w-full h-full grid md:grid-cols-[40%,60%] overflow-hidden gap-3 shadow-menuitems">
        <div className="p-[7%]">
          <h2 className="text-2xl text-darkGray">Add Product</h2>
          <div className="py-4 flex flex-col gap-5">
            <span className="text-xl text-grayText"> Add Images</span>
            {/* Image Uploader */}
            <div className="w-full h-[400px] rounded-2xl relative overflow-hidden">
              {/* <label
              htmlFor="imageUploader"
              className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
            >
              <FaCloudUploadAlt size={150} className="text-grayText" />
              <p>
                Drag and drop image or
                <span className="text-accent"> Browse</span>
              </p>
            </label> */}
              <Image
                alt="product"
                src={payLoad?.imgSrc ? payLoad?.imgSrc : "/images/images.png"}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <UploadButton
              className="text-black "
              endpoint="imageUploader"
              onClientUploadComplete={handleUploadImage}
              onUploadError={(err: Error) => {
                console.log(`Error! ${err}`);
              }}
            />
          </div>
        </div>
        <form className="p-[7%] space-y-4 " onSubmit={handleSubmit}>
          <div>
            <label className="text-darkGray text-xl"> Product Name</label>
            <input
              value={payLoad?.name}
              onChange={(e) => setPayLoad({ ...payLoad, name: e.target.value })}
              required
              type="text"
              placeholder="Ex: Product Name"
              className="w-full h-[40px] text-grayText bg-black bg-opacity-0 px-3 border-2 border-grayText rounded-lg"
            />
          </div>
          <div>
            <label className="text-darkGray text-xl"> Category</label>
            <input
              value={payLoad?.category}
              onChange={(e) =>
                setPayLoad({ ...payLoad, category: e.target.value })
              }
              required
              type="text"
              placeholder="Ex: Men/Women/Kids"
              className="w-full h-[40px] text-grayText bg-black bg-opacity-0 px-3 border-2 border-grayText rounded-lg"
            />
          </div>
          <div>
            <label className="text-darkGray text-xl"> Tags</label>
            <input
              value={payLoad?.tags}
              onChange={(e) => setPayLoad({ ...payLoad, tags: e.target.value })}
              required
              type="text"
              placeholder="Ex: Fashion"
              className="w-full h-[40px] text-grayText bg-black bg-opacity-0 px-3 border-2 border-grayText rounded-lg"
            />
          </div>
          <div>
            <label className="text-darkGray text-xl"> Price</label>
            <input
              value={payLoad?.price}
              onChange={(e) =>
                setPayLoad({ ...payLoad, price: e.target.value })
              }
              required
              type="text"
              placeholder="Ex: Price"
              className="w-full h-[40px] text-grayText bg-black bg-opacity-0 px-3 border-2 border-grayText rounded-lg"
            />
          </div>
          <div>
            <label className="text-darkGray text-xl"> Description</label>
            <textarea
              value={payLoad?.description}
              onChange={(e) =>
                setPayLoad({ ...payLoad, description: e.target.value })
              }
              required
              placeholder="Ex: Description"
              className="w-full h-[100px] pt-2 text-grayText bg-black bg-opacity-0 px-3 outline-none border-2 border-grayText rounded-lg"
            />
          </div>
          <button className="w-full h-[48px] bg-accent rounded-lg text-gray cursor-pointer hover:bg-opacity-70 hover:text-white">
            Add product
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductForm;

{
  /* <form
      action=""
      className="flex flex-col gap-4 items-center p-4"
      onSubmit={handleSubmit}
    >
      <label className="text-2xl">Add product </label>
      <Image
        alt="product"
        src={payLoad?.imgSrc ? payLoad?.imgSrc : "/images/images.png"}
        height={300}
        width={300}
        className="object-cover"
      />
      <UploadButton
        className="text-black"
        endpoint="imageUploader"
        onClientUploadComplete={handleUploadImage}
        onUploadError={(err: Error) => {
          console.log(`Error! ${err}`);
        }}
      />
      <div className="w-[400px]">
        <label className="block ml-1"> Product Name </label>
        <input
required
          placeholder="Enter name"
          type="text"
          name=""
          id="name"
          className="bg-gray w-full px-4 py-2 border outline-pink rounded-md"
          value={payLoad?.name}
          onChange={(e) => setPayLoad({ ...payLoad, name: e.target.value })}
          required
        />
        <label className="block ml-1"> Category </label>
        <input
required
          placeholder="Enter category"
          type="text"
          name=""
          id="category"
          className="bg-gray w-full px-4 py-2 border outline-pink rounded-md"
          value={payLoad?.category}
          onChange={(e) => setPayLoad({ ...payLoad, category: e.target.value })}
          required
        />
        <label className="block ml-1">Price </label>
        <input
required
          placeholder="Enter price"
          type="text"
          name="price"
          id=""
          className="bg-gray w-full px-4 py-2 border outline-pink rounded-md"
          value={payLoad?.price}
          onChange={(e) => setPayLoad({ ...payLoad, price: e.target.value })}
          required
        />
      </div>
      <div className="w-full flex justify-end ">
        {error && (
          <span className="text-errText text-center px-4 py-3">
            Please select an Image
          </span>
        )}
        <button className="w-[148px] h-[50px] bg-accent rounded-lg text-white text-lg">
          Add
        </button>
      </div>
    </form> */
}
