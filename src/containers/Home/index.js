import vegetables from "../../assets/img/CategoryImages/vegetables.png";
import fruits from "../../assets/img/CategoryImages/fruits.png";
import beverages from "../../assets/img/CategoryImages/beverages.png";
import grocery from "../../assets/img/CategoryImages/grocery.png";
import edibleOil from "../../assets/img/CategoryImages/edibleOil.png";
import houseHold from "../../assets/img/CategoryImages/houseHold.png";
import pineapple from "../../assets/img/pineappleFull.png";
import HomeIcon from "../../assets/img/Home.png";
import BagIcon from "../../assets/img/Bag.png";

import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import PlaceOrderButton from "../../components/PlaceOrderButton";

const categories = [
  {
    type: "Vegetables",
    image: vegetables,
    bgColor: "bg-rurketCategoryGreen",
  },
  {
    type: "Fruits",
    image: fruits,
    bgColor: "bg-rurketCategoryRed",
  },
  {
    type: "Beverages",
    image: beverages,
    bgColor: "bg-rurketCategoryYellow",
  },
  {
    type: "Grocery",
    image: grocery,
    bgColor: "bg-rurketCategoryViolet",
  },
  {
    type: "Edible oil",
    image: edibleOil,
    bgColor: "bg-rurketCategoryBlue",
  },
  {
    type: "Household",
    image: houseHold,
    bgColor: "bg-rurketCategoryPink",
  },
];

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

const CategoryCard = ({ category }) => {
  return (
    <Link to={"/category"} className="flex flex-col items-center gap-3">
      {/* Image */}
      <div
        className={`flex items-center justify-center w-14 h-14 md:w-24 md:h-24 ${category.bgColor} rounded-full `}
      >
        <img
          src={category.image}
          alt={category.type}
          className=" w-6 h-6 md:w-10 md:h-10  object-contain"
        />
      </div>
      {/* Name */}
      <p className="text-xs font-semibold md:text-lg">{category.type}</p>
    </Link>
  );
};

const Home = () => {
  return (
    <div className="relative flex flex-col justify-between h-screen bg-rurketBgGray pt-10 pl-6 md:py-12 md:pl-14">
      {/* Top */}

      <div className="relative w-full flex items-center justify-center md:px-8">
        {/* Search bar */}
        <div className="relative w-full flex items-center pl-14 pr-10 ">
          <input
            type="text"
            className="rounded-full w-full h-[50px] pl-11 border-[2px] border-rurketSearchBorderGray bg-transparent placeholder:font-semibold placeholder:text-rurketSearchTextGray placeholder:text-sm focus:ring-rurketSearchFocusGreen focus:border-rurketSearchFocusGreen md:placeholder:text-lg"
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

        {/* Hamburger icon */}
        <div className="absolute left-0 cursor-pointer">
          <svg
            width="25"
            height="18"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8.33333H12.9014M1 1H23M1 15.6667H23"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Hero - Categories */}
      <div className="w-full flex flex-col justify-center pt-8">
        {/* Heading */}
        <div>
          <p className="font-bold text-3xl  md:text-5xl ">Order fresh </p>
          <p className="font-bold text-3xl md:text-5xl">from villages</p>
        </div>
        {/* Categories */}
        <div className="w-full pt-5 md:pt-8">
          <p className="font-bold text-lg md:text-2xl">Categories</p>
          {/* Category list container */}
          <div className="w-full flex items-center gap-5 md:gap-9 overflow-x-scroll scrollbar-none  pt-4 scroll-smooth ">
            {/* Category */}
            {categories?.map((category) => (
              <CategoryCard category={category} key={category.type} />
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Items Container */}
        <div className="w-full flex gap-6 md:gap-8 items-center overflow-x-scroll  scrollbar-none smooth-scroll pt-24 pb-14">
          {/* Item Card */}
          {products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      {/* Bottom */}
      <div className="flex items-center justify-center md:justify-between w-full pb-8 gap-12">
        <div className="flex pl-4 md:pl-7 gap-12 md:gap-24">
          <Link to={"/"}>
            <img src={HomeIcon} alt="home" className="w-5 h-5 md:w-8 md:h-8" />
          </Link>
          <Link to={"/cart"}>
            <img src={BagIcon} alt="Bag" className="w-5 h-5 md:w-8 md:h-8" />
          </Link>
        </div>
        {/*Place Order Button  */}
        <PlaceOrderButton />
      </div>
    </div>
  );
};
export default Home;
