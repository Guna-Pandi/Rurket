import React from "react";
import { BiArrowBack } from "react-icons/bi";
import orderIdImg from "../../assets/img/TrackOrderImages/orderId.png";
import orderPlacedImg from "../../assets/img/TrackOrderImages/orderPlaced.png";
import orderConfirmImg from "../../assets/img/TrackOrderImages/orderConfirm.png";
import orderReadyImg from "../../assets/img/TrackOrderImages/orderReady.png";
import orderDeliveryImg from "../../assets/img/TrackOrderImages/orderDelivery.png";
import orderDeliveredImg from "../../assets/img/TrackOrderImages/orderDelivered.png";
import { Link } from "react-router-dom";

const orderStatus = [
  {
    id: 1,
    status: "Order Placed",
    image: orderPlacedImg,
    date: "December 24 2023",
    bgColor: " bg-rurketPaleGreen",
  },
  {
    id: 2,
    status: "Order Confirmed",
    image: orderConfirmImg,
    date: "December 24 2023",
    bgColor: " bg-rurketPaleGreen",
    iconSizeSmall: true,
  },
  {
    id: 3,
    status: "Packed & Ready",
    image: orderReadyImg,
    date: "December 24 2023",
    bgColor: " bg-rurketPaleGreen",
  },
  {
    id: 4,
    status: "Out for Delivery",
    image: orderDeliveryImg,
    date: "December 24 2023",
    bgColor: " bg-rurketIconBgGray",
  },
  {
    id: 5,
    status: "Order Delivered",
    image: orderDeliveredImg,
    date: "December 24 2023",
    bgColor: " bg-rurketIconBgGray",
    isLine: true,
  },
];

const TrackOrder = () => {
  return (
    <div className="w-full flex flex-col justify-between bg-rurketBgGray h-screen px-4 pt-8 md:p-14 ">
      <div className="pt-3 h-full ">
        {/* Track order title  */}
        <div className="relative w-full flex items-center justify-center">
        <Link to={"/orderHistory"} className="absolute text-lg md:text-2xl left-0">
          <BiArrowBack  />
        </Link>
          <p className="font-bold text-xl text-center md:text-2xl">
            Track Order
          </p>
        </div>
        <div className="flex flex-col justify-center pt-10">
          {/* Top Section - Track order Id info */}
          <div className="min-w-screen-5xl min-h-[110px] flex gap-4 md:gap-12 md:pl-[4.5rem] md:py-4 bg-white mb-6 md:text-xl items-center rounded-2xl p-4 drop-shadow-md">
            {/* Image */}
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-rurketPaleGreen">
              <img src={orderIdImg} alt="" className="w-8 h-8 object-contain" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-lg md:text-xl">Order #90897</p>
              <p className=" text-rurketTextGray text-sm">
                Placed on September 03 2023
              </p>
              <div className="flex gap-5">
                <p className="font-semibold text-sm font-poppins">Items:10</p>
                <p className="font-semibold text-sm font-poppins">Price:₹150</p>
              </div>
            </div>
          </div>

          {/* Middle status Section */}
          <div className=" min-w-screen-5xl py-4 flex flex-col gap-4 mb-8 md:pl-14 md:py-4 bg-white md:text-xl justify-center  rounded-2xl  drop-shadow-md">
            {/* Order Status */}
            {orderStatus?.map((item) => (
              <div
                key={item.id}
                className="relative p-4 flex items-center gap-4 md:gap-12"
              >
                <div
                  className={` relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full ${item.bgColor}`}
                >
                  <img
                    src={item.image}
                    alt={item.status}
                    className={`${
                      item.iconSizeSmall && item.iconSizeSmall
                        ? "w-6 h-6"
                        : "w-8 h-8"
                    } object-contain`}
                  />
                  {/* Vertical Line */}
                  {item.isLine ? (
                    <></>
                  ) : (
                    <div className="absolute top-14 right-7 md:top-[5rem] md:right-10 h-[48px] bg-rurketDividerLine w-[1px]" />
                  )}
                </div>
                <div className="flex flex-col  gap-1">
                  <p className="font-semibold text-lg md:text-xl">
                    {item.status}
                  </p>
                  <p className=" text-rurketTextGray text-sm ">{item.date}</p>
                </div>
                {/* Horizontal Line */}
                {item.isLine ? (
                  <></>
                ) : (
                  <div className="absolute bottom-0 right-0 h-[1px] bg-rurketDividerLine w-3/4 " />
                )}
              </div>
            ))}
          </div>

          {/* Bottom Items section */}
          <div className="flex flex-col">
            <p className="font-bold mb-4 ml-4 text-lg md:text-xl">Items</p>
            <div className="min-w-screen-5xl min-h-[110px] flex flex-col  gap-4 sm:px-14 bg-white mb-6 md:text-xl justify-center rounded-2xl p-4 drop-shadow-md">
              {/* Item 1*/}
              <div className="flex items-center justify-between">
                <p className="font-semibold">Pine Apples</p>
                <div className="flex gap-7 md:gap-14">
                  <p className="font-poppins">1Kg</p>
                  <p className="font-semibold font-poppins">₹300</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between">
                <div className="font-semibold">Oranges</div>
                <div className="flex gap-7 md:gap-14">
                  <p className="font-poppins">1Kg</p>
                  <p className="font-semibold font-poppins">₹300</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
