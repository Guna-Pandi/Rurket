import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import wrap from "../../assets/img/WRAPPER.png";
import RegisterPage from "../RegisterPhone";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const RukertAnimation = () => {
  return (
    <div className="joinrukert">
      <motion.div className="containerload">
        <motion.h3
          className="rukertText"
          variants={animationConfiguration}
          exit="exit"
          transition={{ duration: 2, delay: 3 }}
          initial="initial"
          animate="animate"
        >
          <center>Rurket</center>
        </motion.h3>
      </motion.div>
    </div>
  );
};

const WrapperPa = () => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 5 }}
    >
      <div className="h-screen w-screen flex flex-col overflow-hidden">
        <img className="bgimage" src={wrap} alt="WrapperPage" />
      </div>
      <motion.div className="RukertFit">
        <RukertAnimation />
      </motion.div>
    </motion.div>
  );
};

const WrapperPage = () => {
  return (
    <span className=" flex flex-col h-screen w-full overflow-hidden">
      <WrapperPa></WrapperPa>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          x: { type: "spring", stiffness: 100, damping: 30 },
          opacity: { duration: 0.8 },
          delay: 8,
          duration: 5,
        }}
        className="absolute w-full h-full"
      >
        <RegisterPage />
      </motion.div>
    </span>
  );
};
export default WrapperPage;
