import LoginBgImage from "../../assets/img/login_background.png";
import RegisterButton from "../../components/RegisterButton";
import "./index.css";

const OtpInputField = () => {
  return <input type="number" className="otpInputField" />;
};

const RegisterOtp = () => {
  return (
    <div className="loginotpContainer">
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

        <div className="otpContent">
          {/* Otp Input */}
          <p className="phoneNum">Enter OTP (+91 7397706858)</p>
          <div className="otpInput">
            {[...Array(6)].map((_, index) => (
              <OtpInputField key={index} />
            ))}
          </div>
          <div className="resendBlock">
            {/*Verify Button */}
            <RegisterButton text="Verify" />
            <span className="resendOtp">Resend OTP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterOtp;
