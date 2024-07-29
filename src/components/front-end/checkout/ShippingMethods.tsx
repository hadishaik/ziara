import React from "react";

const ShippingMethods = () => {
  return (
    <div>
      <p className="mt-8 text-lg font-medium">Shipping Methods</p>
      <form className="mt-5 grid gap-6">
        <div className="relative">
          <input
            className="peer hidden"
            id="radio_1"
            type="radio"
            name="radio"
            checked
          />
          <span className="peer-checked:border-pink absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-white bg-white"></span>
          <label
            className="peer-checked:border-2 peer-checked:border-pink peer-checked:bg-gray flex cursor-pointer select-none rounded-lg border border-pink p-4"
            htmlFor="radio_1"
          >
            <img
              className="w-14 object-contain"
              src="/Icons/Delhivery.png"
              alt="Delievery-partner"
            />
            <div className="ml-5">
              <span className="mt-2 font-semibold">Delhivery</span>
              <p className="text-slate-500 text-sm leading-6">
                Delivery: 4-6 Days
              </p>
            </div>
          </label>
        </div>
        <div className="relative">
          <input
            className="peer hidden"
            id="radio_2"
            type="radio"
            name="radio"
            checked
          />
          <span className="peer-checked:border-pink absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-white bg-white"></span>
          <label
            className="peer-checked:border-2 peer-checked:border-pink peer-checked:bg-gray flex cursor-pointer select-none rounded-lg border border-pink p-4"
            htmlFor="radio_2"
          >
            <img
              className="w-14 object-contain"
              src="/Icons/Fedex.png"
              alt="Delievery Partner"
            />
            <div className="ml-5">
              <span className="mt-2 font-semibold">FedEx Express Delivery</span>
              <p className="text-slate-500 text-sm leading-6">
                Delivery: 2-4 Days
              </p>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default ShippingMethods;
