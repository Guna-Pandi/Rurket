import React from "react";
import "./index.css";
import { MdCircle } from "react-icons/md";
import { TbSend } from "react-icons/tb";
const FAButton = (props) => {
  return (
    <button className="pobutton">
      <div className=" tbnt">
        <TbSend />
      </div>
      <div className="txt">{props.text}</div>
      <div className="tmcle">
        <MdCircle />
        <div className="num">
          <h1 className="number">4</h1>
        </div>
      </div>
    </button>
  );
};

export default FAButton;
