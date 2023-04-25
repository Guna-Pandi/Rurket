import React from "react";
import { Link } from "react-router-dom";
import SendIcon from "../../assets/img/Send.png";

const PlaceOrderButton = () => {
  return (
    <Link
      to="/cart"
      className="relative md:right-12 right-2 flex items-center justify-evenly w-[200px] h-[55px] md:w-[264px] md:h-[75px]  bg-rurketButtonBlack rounded-lg"
    >
      <img
        src={SendIcon}
        alt="SendIcon"
        className="w-5 h-5 absolute left-3 md:w-8 md:h-8"
      />
      <p className="text-white font-semibold mr-4 text-md md:text-xl">Place order</p>
      <div className="absolute flex items-center justify-center right-3 w-10 h-10 md:w-11 md:h-11 bg-rurketDarkRed rounded-full ">
        <p className="text-lg text-white mb-1 md:text-xl">4</p>
      </div>
    </Link>
  );
};

export default PlaceOrderButton;
