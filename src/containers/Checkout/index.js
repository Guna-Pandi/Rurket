import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BsWallet2 } from "react-icons/bs";
import SubmitButton from "../../components/SubmitButton";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="w-full flex flex-col justify-between bg-rurketBgGray h-screen p-7 md:p-14">
      {/* Top */}
      <div className="pt-3 h-full ">
        {/* Checkout title  */}
        <div className="relative w-full flex items-center justify-center">
          <Link to={"/cart"} className="absolute text-lg md:text-2xl left-0">
            <BiArrowBack />
          </Link>
          <p className="font-bold text-xl text-center md:text-2xl">Checkout</p>
        </div>

        <div className="flex flex-col justify-center pt-10">
          {/* Shipping info */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold md:text-xl">Shipping information</p>
              <p className="text-md md:text-lg pr-4 cursor-pointer text-rurketGreen font-semibold">
                change
              </p>
            </div>
            <div className="min-w-screen-5xl  min-h-[122px] flex flex-col gap-4 sm:px-14 bg-white text-md md:text-xl  justify-center rounded-lg p-4 drop-shadow-md">
              <div className="w-full flex items-center gap-2">
                <BsPerson className="text-xl" />
                <p className="text-md">Person Name</p>
              </div>

              <div className="w-full flex  items-start  gap-2">
                <SlLocationPin className="mt-1 text-xl" />
                <p className="ml-1 overflow-scroll ">
                  Door No, Street, Place , District-House
                </p>
              </div>
            </div>
          </div>
          {/* Payment Method */}
          <div className="flex flex-col gap-4 drop-shadow-md">
            <p className="font-semibold text-md md:text-xl">Payment Method</p>
            <div className="min-w-screen-4xl flex h-[89px] bg-white rounded-lg p-4 sm:px-14 items-center">
              <input
                type="radio"
                className="focus:ring-rurketGreen checked:text-rurketGreen"
              />
              <div className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center text-white  bg-rurketGreen rounded-md ml-4">
                <BsWallet2 />
              </div>
              <p className="pl-7 text-md md:text-xl">Cash on delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full flex flex-col justify-center gap-6 ">
        <div className="flex items-center justify-between">
          <p className="text-base md:text-xl">Total</p>
          <p className="text-2xl md:text-3xl font-bold text-rurketGreen">
            ₹300
          </p>
        </div>
        <Link to="/selectAddress">
          <SubmitButton text="Confirm" isIcon={true} />
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
