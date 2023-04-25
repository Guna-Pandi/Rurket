import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import SubmitButton from "../../components/SubmitButton";

const customerAddress = [
  {
    id: 1,
    name: "Person Name 1",
    address: "15, West Street, Anna nagar,Chennai - Office",
  },
  {
    id: 2,
    name: "Person Name 2",
    address: "10, East Street, Peelamedu,Coimbatore- College",
  },
];

const AddressCard = ({ item }) => {
  return (
    <div className="min-w-screen-5xl min-h-[122px] flex items-center gap-4 sm:px-14 bg-white text-md md:text-xl  justify-center rounded-lg p-4 drop-shadow-md ">
      <div>
        <input
          type="radio"
          className=" focus:ring-rurketGreen checked:text-rurketGreen"
        />
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="w-full flex items-center gap-2">
          <BsPerson className="text-xl" />
          <p className="text-md">{item.name}</p>
        </div>
        <div className="w-full flex items-start  gap-2">
          <SlLocationPin className="mt-1 text-xl" />
          <p className="ml-1 overflow-scroll">{item.address}</p>
        </div>
      </div>
    </div>
  );
};

const SelectAddress = () => {
  return (
    <div className="w-full flex flex-col justify-between bg-rurketBgGray h-screen p-4 sm:p-7 md:p-14">
      {/* Top */}
      <div className="pt-3 h-full ">
        {/* Select Address title  */}
        <div className="relative w-full flex items-center justify-center">
          <Link
            to={"/checkout"}
            className="absolute text-lg left-0 md:text-2xl"
          >
            <BiArrowBack />
          </Link>
          <p className="font-bold text-xl text-center md:text-2xl">
            Select Address
          </p>
        </div>

        <div className="flex flex-col justify-center pt-10">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            {/* Customer Address */}
            {customerAddress?.map((item) => (
              <AddressCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full flex flex-col justify-center gap-3 md:gap-5">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-white drop-shadow-lg text-rurketGreen focus:ring-rurketGreen md:h-7 md:w-7"
          />
          <p className="text-lg md:text-xl">Make as default address</p>
        </div>
        <Link to="/orderSuccess">
          <SubmitButton text="Select this address" isIcon={true} />
        </Link>
        <Link to="/addNewAddress">
          <p className="text-lg font-bold text-center md:text-2xl">
            + Add new address
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SelectAddress;
