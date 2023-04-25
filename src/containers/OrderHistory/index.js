import React from "react";
import { BiArrowBack } from "react-icons/bi";
import orderIdImg from "../../assets/img/TrackOrderImages/orderId.png";
import { Link } from "react-router-dom";

const orders = [
  {
    id: 1,
    name: "Order #90897",
    placedOn: "Placed on September 03",
    quantity: "10",
    price: "150",
  },
  {
    id: 2,
    name: "Order #90898",
    placedOn: "Placed on October 24",
    quantity: "4",
    price: "1800",
  },
  {
    id: 3,
    name: "Order #90899",
    placedOn: "Placed on April 17",
    quantity: "15",
    price: "200",
  },
  {
    id: 4,
    name: "Order #90937",
    placedOn: "Placed on October 03",
    quantity: "32",
    price: "110",
  },
  {
    id: 5,
    name: "Order #90967",
    placedOn: "Placed on September 12",
    quantity: "2",
    price: "12000",
  },
];

const OrderHistory = () => {
  return (
    <div className="w-full flex flex-col justify-between bg-rurketBgGray h-screen px-4 pt-8 md:p-14 ">
      <div className="pt-3 h-full ">
        {/* Order History title  */}
        <div className="relative w-full flex items-center justify-center">
          <Link to={"/"} className="absolute text-lg md:text-2xl left-0">
            <BiArrowBack />
          </Link>
          <p className="font-bold text-xl text-center md:text-2xl">
            Order History
          </p>
        </div>

        {/* Orders Section */}
        <div className="flex flex-col justify-center pt-10">
          {/* Order */}
          {orders?.map((item) => (
            <div
              key={item.id}
              className="min-w-screen-5xl min-h-[110px] flex gap-4 md:gap-12 md:pl-[3rem] md:py-4 bg-white mb-6 md:text-xl items-center rounded-2xl p-4 drop-shadow-sm"
            >
              {/* Image */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-rurketPaleGreen">
                <img
                  src={orderIdImg}
                  alt={item.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              {/* order details */}
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-lg md:text-xl">{item.name}</p>
                <p className=" text-rurketTextGray text-sm">{item.placedOn}</p>
                <div className="flex gap-5">
                  <p className="font-semibold text-sm font-poppins">
                    Items:{item.quantity}
                  </p>
                  <p className="font-semibold text-sm font-poppins">
                    Price:₹{item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
