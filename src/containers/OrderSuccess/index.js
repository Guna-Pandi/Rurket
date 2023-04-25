import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SubmitButton from "../../components/SubmitButton";
import {Link} from "react-router-dom"
import "./index.css";

const OrderSuccess = () => {
  return (
    <div className='full-container'>
        <div className='all-compnents'>
          
        <div className='cartBag-img'>
        <HiOutlineShoppingBag className="basket-os"  />
        </div>
  
        <div>
        <h1 className='success-note'>Your order was succesfull !</h1>
        </div>

        <div className='track-btn'>
         <Link to="/TrackOrder">
         <SubmitButton text="Track Order"  isIcon={true}/>
         </Link>
        </div>

        <div >
       <p className='go-home'><a href="/" >Go to Home</a></p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
