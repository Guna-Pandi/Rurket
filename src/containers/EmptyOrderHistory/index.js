import React from "react";
import { BiArrowBack } from "react-icons/bi";
import SubmitButton from "../../components/SubmitButton";

const EmptyOrderHistory = () => {
  return (
    <div className="h-screen px-8 md:px-14 flex flex-col">
      <div className="relative w-full flex items-center justify-center pt-12 ">
        <BiArrowBack className="absolute text-lg md:text-4xl left-0" />
        <p className="font-bold text-xl text-center md:text-4xl">
          Order History
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center pb-14 gap-3 md:gap-7">
        <p className="font-semibold text-2xl md:text-5xl">No history Yet</p>
        <div className="flex flex-col items-center justify-center w-[80%]">
          <p className="font-base text-gray-700 md:text-2xl">Hit the order button down</p>
          <p className="font-base text-gray-700 md:text-2xl">below to Create an order</p>
        </div>
      <SubmitButton text="Start Ordering" isIcon={false}/>
      </div>
    </div>
  );
};

export default EmptyOrderHistory;
