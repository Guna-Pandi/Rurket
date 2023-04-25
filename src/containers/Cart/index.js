import { BiArrowBack } from "react-icons/bi";
import SubmitButton from "../../components/SubmitButton";
import pineappleImg from "../../assets/img/pineapple-pieces.png";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Strawberry from "../../assets/img/strawberry.png";
import { Link } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Pine Apple",
    image: pineappleImg,
    price: "150",
  },
  {
    id: 2,
    name: "Strawberry",
    image: Strawberry,
    price: "250",
  },
];

const CartItem = ({ item }) => {
  return (
    <div className="min-w-screen-5xl  min-h-[122px] flex gap-5 md:gap-14  sm:px-14 bg-white text-md md:text-xl rounded-lg p-4 drop-shadow-md">
      {/* Item Image */}
      <div className="w-20 h-20 md:w-28 md:h-28 my-auto">
        <img
          src={item.image}
          alt={item.name}
          className=" w-full h-full object-contain"
        />
      </div>

      {/* Item Details */}
      <div className="flex flex-col ">
        <p className="font-semibold md:text-2xl">{item.name}</p>
        <p className=" text-rurketGreen font-bold ">₹{item.price}</p>
        <div className="flex items-center gap-5 md:gap-8 pt-3">
          <AiOutlineMinus className="text-rurketGreen text-xl md:text-2xl" />
          <p className="font-semibold font-poppins md:text-2xl">0.5 KG</p>
          <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center bg-rurketButtonBlack rounded-md">
            <AiOutlinePlus className="text-rurketGreen text-lg md:text-2xl" />
          </div>
        </div>
        <AiOutlineDelete className="absolute right-4 top-2 md:right-8 md:top-3 text-2xl md:text-[2.5rem] text-rurketDelete" />
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="w-full flex flex-col justify-between bg-rurketBgGray h-screen p-8 md:p-14">
      {/* Top */}
      <div className="pt-3 h-full ">
        {/* Basket title  */}
        <div className="relative w-full flex items-center justify-center">
          <Link to={"/"} className="absolute text-lg md:text-2xl left-0">
            <BiArrowBack />
          </Link>
          <p className="font-bold text-xl text-center md:text-2xl">Basket</p>
        </div>

        <div className=" flex flex-col justify-center pt-10 gap-6">
          {/* Cart Item */}
          {cartItems?.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
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
        <Link to="/checkout">
          <SubmitButton text="Checkout" isIcon={true} />
        </Link>
      </div>
    </div>
  );
};

export default Cart;
