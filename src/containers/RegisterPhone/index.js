import "./index.css";
import LoginBgImage from "../../assets/img/login_background.png";
import RegisterButton from "../../components/RegisterButton";

const RegisterPhone = () => {
  return (
    <div className="loginContainer">
      {/* Background Image */}
      <img src={LoginBgImage} alt="Background" className="bgImage" />
      {/* Top */}
      <div className="topContent">
        {/*Welcome Content */}
        <div>
          <p className="welcome">Welcome</p>
          <p className="to">
            to <span className="rurket">Rurket</span>
          </p>
        </div>

        <div className="phoneNumber">
          {/* Phone Number */}
          <p className="lable1">Enter Your Phone Number</p>
          <div className="lable2-input">
            <span className="lable2">+91</span>{" "}
            <input type="number" className="lable2-input-field" maxlength="10"/>
          </div>
          {/* Line */}
          <div className="line" />
          {/*Send OTP Button */}
          <RegisterButton text="Send OTP" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPhone;
