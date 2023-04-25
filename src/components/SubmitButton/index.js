import { AiOutlineRightCircle } from "react-icons/ai";

const SubmitButton = ({ text, isIcon }) => {
  return (
    <button
      type="submit"
      className={`relative flex items-center justify-center text-white  ${
        isIcon ? "text-lg md:text-3xl" : "text-xl md:text-3xl"
      } font-semibold  rounded-md drop-shadow-lg h-[70px] w-full p-8 bg-rurketButtonBlack mx-auto`}
    >
      {text}
      {isIcon && (
        <div className="absolute right-8 ">
          <AiOutlineRightCircle className="text-3xl text-rurketGreen md:text-[2.5rem]" />
        </div>
      )}
    </button>
  );
};

export default SubmitButton;
