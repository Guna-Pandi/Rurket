import React from "react";
import "./index.css";
import circle1 from "../../assets/img/Ellipse 20.png";
import circle2 from "../../assets/img/Ellipse 21.png";
import sign from "../../assets/img/Logout.png";
const Menu = () => {
  return (
    <div className="Menu">
      <div className="Svg">
        <svg
          width="121"
          height="121"
          viewBox="0 0 65 68"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60.5" cy="6.5" r="60.5" fill="#309D49" />
        </svg>
      </div>
      <div className="Para">
        <p className="Cc">customar care</p>
        <div className="Below">
          <p>feel free to connect us</p>
          <p>through whatsapp for</p>
          <p>bulk enquires and call</p>
          <p>us for emergency issues</p>
          <p className="H4">+91 8838363360</p>
          <img className="Svg2" src={circle2} alt="circle2" />
          <img className="Svg3" src={circle1} alt="circle1" />
          <div className="Ro">
            <img className="Svg4" src={sign} alt="Svg4" />
            <p className="Sign">Sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
