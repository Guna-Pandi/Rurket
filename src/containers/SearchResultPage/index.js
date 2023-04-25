import React, { useState, useEffect } from "react";
import "./index.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import SendIcon from "../../assets/img/Send.png";
import pineapple from "../../assets/img/pineappleFull.png";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "PineApple",
    tamilName: "Annachi Palam",
    price: "359",
    image: pineapple,
  },
  {
    id: 2,
    name: "PineApple",
    tamilName: "Annachi Palam",
    price: "359",
    image: pineapple,
  },
  {
    id: 3,
    name: "PineApple",
    tamilName: "Annachi Palam",
    price: "359",
    image: pineapple,
  },
  {
    id: 4,
    name: "PineApple",
    tamilName: "Annachi Palam",
    price: "359",
    image: pineapple,
  },
  {
    id: 5,
    name: "PineApple",
    tamilName: "Annachi Palam",
    price: "359",
    image: pineapple,
  },
];

const SingleItem = ({ item }) => {
  const [showQuantity, setShowQuantity] = useState(false);
  const [qty, setQty] = useState(1);

  const addQuantity = () => {
    setQty(qty + 0.5);
  };

  const subQuantity = () => {
    setQty(qty - 0.5);
  };

  useEffect(() => {
    if (qty === 0) {
      setShowQuantity(false);
      setQty(1);
    }
  }, [qty]);

  return (
    <div className="relative flex  items-center justify-center min-w-[165px] h-[240px] md:min-w-[240px] md:h-[280px] bg-white shadow-md  rounded-2xl mt-8 ml-4">
      {/* Image */}
      <div className="absolute flex items-center justify-center  -top-10 md:-top-12  w-[120px] md:w-[140px] h-[120px] md:h-[140px] bg-rurketItemBg rounded-full">
        <img
          src={item.image}
          alt="pineapple"
          className="w-[5.2rem] h-[5.2rem] md:w-[6.2rem] md:h-[6.2rem] object-cover ml-1 overflow-visible"
        />
      </div>
      {/* Item Details */}
      <div className="flex flex-col justify-center items-center pt-3 ">
        <p className="text-xl font-semibold md:text-2xl ">{item.name}</p>
        <p className="text-rurketSearchTextGray font-semibold text-sm md:text-lg">
          {item.tamilName}
        </p>
        <p className="text-rurketItemsGreen font-semibold md:text-lg">
          ₹{item.price}
        </p>
      </div>
      {/* Quantity/Add to bag */}
      <div className="absolute flex items-center justify-center gap-2 bottom-6">
        {showQuantity && (
          <div className="flex items-center gap-5 md:gap-8 pt-3">
            <AiOutlineMinus
              className="text-rurketGreen text-xl md:text-2xl"
              onClick={subQuantity}
            />
            <p className="font-bold font-poppins  md:text-xl">{qty} KG</p>
            <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center bg-rurketButtonBlack rounded-md">
              <AiOutlinePlus
                className="text-rurketGreen text-lg md:text-2xl"
                onClick={addQuantity}
              />
            </div>
          </div>
        )}
        {!showQuantity && (
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <HiOutlineShoppingBag className=" text-rurketAddtoBagGreen md:text-2xl" />
            <p
              onClick={() => setShowQuantity(true)}
              className="text-xs font-semibold md:text-lg"
            >
              Add to bag
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div>
      <div className="relative w-full flex items-center pl-14 pr-10 pt-10 pl-6  md:py-12 md:pl-14 ">
        <Link to="/">
          <label className="lArrow">
            <HiOutlineArrowLeft />
          </label>
        </Link>
        <input
          type="text"
          className=" rounded-full w-full h-[50px] pl-11 border-[2px] border-rurketSearchBorderGray bg-transparent placeholder:font-semibold placeholder:text-rurketSearchTextGray placeholder:text-sm focus:ring-rurketSearchFocusGreen focus:border-rurketSearchFocusGreen md:placeholder:text-lg"
          placeholder="Search"
        />
        <div className="absolute left-[4.6rem]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="9.76657"
              cy="9.7666"
              r="8.98856"
              stroke="#200E32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0183 16.4851L19.5423 20"
              stroke="#200E32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="result1">Found {products.length} results</p>
      <div className="flex flex-row mr-4">
        <div className="w-full flex flex-col  gap-5 md:gap-8 items-center pt-10 pb-14">
          {/* Item Card */}

          {products.map(
            (item, index) =>
              index % 2 === 0 && (
                <div key={index}>
                  <SingleItem item={item} key={item.id} />
                </div>
              )
          )}
        </div>
        <div className="w-full flex flex-col mt-24 gap-5 md:gap-8 items-center pt-7 pb-14">
          {/* Item Card */}

          {products.map(
            (item, index) =>
              index % 2 === 1 && (
                <div key={index}>
                  <SingleItem item={item} key={item.id} />
                </div>
              )
          )}
        </div>
      </div>
      <Link to="/cart">
        <div className="fixed bottom-4 right-4">
          <div className="relative  flex items-center justify-center w-[200px] md:w-[264px] h-[50px] md:h-[70px] pr-2 bg-rurketButtonBlack rounded-lg">
            <img
              src={SendIcon}
              alt="SendIcon"
              className="w-5 h-5 absolute left-3 md:w-8 md:h-8"
            />
            <p className="text-white font-semibold text-md md:text-xl">
              Place order
            </p>
            <div className="absolute flex items-center justify-center right-3 w-9 h-9 md:w-11 md:h-11 bg-rurketDarkRed rounded-full ">
              <p className="text-lg text-white mb-1 md:text-xl">4</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Search;
