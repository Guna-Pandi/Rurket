import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import pineappleimg from "./../../assets/img/pineapple-pieces.png";
import Button from "../../components/FAButton";
import PlaceOrderButton from "../../components/PlaceOrderButton";

const SingleProduct = () => {
  return (
    <div className="singleproduct-container">
      {/* Top image section */}
      <div className="arrowContainer">
        <Link to="/">
          <HiArrowSmLeft className="arrow" size={35} />
        </Link>
      </div>
      <div className="img-container">
        <img src={pineappleimg} className="img-con" alt="pine" />
      </div>
      {/* Bottom content section */}
      <div className="bottom-info-1">
        <div className="bottom-info">
          <div className="capsicum">
            <h2 className="head">Capsicum</h2>
            <p className="para-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim adLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad
            </p>
          </div>
          <div className="price-cart">
            <div className="price">
              <p className="price-r">₹ 359</p>
            </div>
            <Link to={"/cart"} className="cart">
              <HiOutlineShoppingBag className="basket" size={25} />
              <p className="add-cart">Add to cart</p>
            </Link>
          </div>
        </div>
        <div className="button-background">
          <PlaceOrderButton />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
