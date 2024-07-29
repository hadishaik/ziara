"use client";
import { UploadButton } from "@/app/utils/uploadthing";
import axios from "axios";
import Image from "next/image";
import React, {
  FormEvent,
  SetStateAction,
  useDeferredValue,
  useState,
} from "react";

interface IOffer {
  name: string | null;
  imgSrc: string;
  discount: string | null;
  expireTime: any;
}

const OfferForm = () => {
  const date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const [offer, setOffer] = useState<IOffer>({
    name: "",
    imgSrc: "",
    discount: "",
    expireTime: date,
  });
  const debuncedState = useDeferredValue(offer);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await axios
      .post("/api/add_offer", debuncedState)
      .then((res) => console.log(res.data.msg))
      .catch((err) => console.log(err))
      .finally(() =>
        setOffer({
          name: "",
          imgSrc: "",
          discount: "",
          expireTime: date,
        })
      );
  };
  const handleUploadImage = (res: any) => {
    setOffer((prevState) => ({
      ...prevState,
      imgSrc: res[0].url,
    }));
    // setError(false);
  };
  return (
    <form
      className="flex flex-col gap-4 items-center p-4"
      onSubmit={handleSubmit}
    >
      <label className="text-3xl  underline pb-3"> Add Offers</label>
      {/*  images Section */}
      <div className="w-[700px]">
        <div className="w-full min-h-[400px] max-h-[600px]" id="Primary-Image">
          <label className="text-2xl">Add Image </label>
          <Image
            alt="product"
            src={offer?.imgSrc ? offer?.imgSrc : "/images/images.png"}
            height={500}
            width={700}
            className="object-contain pb-3"
          />
          <UploadButton
            className="text-black"
            endpoint="imageUploader"
            onClientUploadComplete={handleUploadImage}
            onUploadError={(err: Error) => {
              console.log(`Error! ${err}`);
            }}
          />
        </div>
      </div>

      <div className="w-full">
        <label className="block ml-1"> Product Name </label>
        <input
          placeholder="Enter name"
          type="text"
          id="name"
          className="bg-gray w-full px-4 py-2 border outline-pink rounded-md"
          value={offer.name ?? ""}
          onChange={(e) => setOffer({ ...offer, name: e.target.value })}
          required
        />
        <label className="block ml-1"> Discount percentage </label>
        <input
          placeholder="Enter discount"
          type="text"
          id="discount"
          className="bg-gray w-full px-4 py-2 border outline-pink rounded-md"
          value={offer?.discount ?? ""}
          onChange={(e) => setOffer({ ...offer, discount: e.target.value })}
          required
        />
        <label className="block ml-1">Schedule </label>
      </div>
      <div className="w-full flex justify-end ">
        {/* {error && (
          <span className="text-errText text-center px-4 py-3">
            Please select an Image
          </span>
        )} */}
        <button className="w-[148px] h-[50px] bg-accent rounded-lg text-white text-lg">
          Add
        </button>
      </div>
    </form>
  );
};

export default OfferForm;
