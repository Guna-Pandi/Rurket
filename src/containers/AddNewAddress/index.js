import React from "react";
import "./index.css";
import lettuce from "./../../assets/img/Rectangle 572.png";
import { BsPlusLg } from "react-icons/bs";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const AddNewAddress = () => {
  return (
    <div className="back-fullcontainer">
      <div className="arrowcon-back">
        <Link to="/selectAddress">
          <HiArrowSmLeft className="arrow-back" size={35} />
        </Link>
      </div>
      <div className="img-container1">
        <img src={lettuce} className="lettu-back" alt="lettu" />
      </div>
      <form className="address-area">
        <div className="title">
          <h1 className="title-address">Add new address</h1>
        </div>
        <div className="form-group1">
          <label className="form-lable1">Receiver Name</label>
          <input type="text" className="form-input1" placeholder="Ex: Guna" />
        </div>
        <div className="both">
          <div className="form-group2">
            <label className="form-lable2">Title</label>
            <div className="need-gap">
              <input
                type="text"
                className="form-input2"
                placeholder="Ex: Home/Office"
              />
            </div>
          </div>
          <div className="form-group3">
            <label className="form-lable3">Door No</label>
            <input
              type="text"
              className="form-input3"
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="form-group4">
          <label className="form-lable4">Street</label>
          <input
            type="text"
            className="form-input4"
            placeholder="Type street name"
          />
        </div>
        <div className="form-group5">
          <select type="text" className="form-input5">
            <option value="nkl">Select your area</option>
          </select>
        </div>
        <div className="avai-text">
          <p className="availability-text">
            *Currently we are avilable only in certain areas in <b>Salem</b>{" "}
            district{" "}
          </p>
        </div>
        <div className="add-btn">
          <Link to={"/selectAddress"} className="addButton">
            <div className="text-icon">
              <div className="plus-icon">
                <BsPlusLg size={30} />
              </div>
              <div className="add-txt">Add address</div>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default AddNewAddress;
