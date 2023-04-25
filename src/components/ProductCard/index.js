import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ item, isCategory }) => {
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
    <div
      className={`relative flex flex-col items-center justify-center ${
        isCategory
          ? "min-w-[161px] h-[230px] md:min-w-[190px] md:h-[270px]"
          : "min-w-[200px] h-[240px] md:min-w-[240px] md:h-[280px]"
      }  bg-white shadow-md  rounded-2xl`}
    >
      {/* Image */}
      <Link to={"/singleProduct"}>
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
      </Link>
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

export default ProductCard;
