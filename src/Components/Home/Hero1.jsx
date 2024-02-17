import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col text-center w-full items-center justify-center bg-[#101827] text-white py-20">
      <h1 className="font-gilroy text-[6vw] font-black md:text-7xl xl:w-[70%] xl:text-8xl">
        Meet with your <br /> global audience!
      </h1>
      <p className="line-clamp-3 w-[40%] text-xs mt-5">
        Break language barriers and connect with a global audience! Our audio
        translation services bring your content to life in multiple languages,
        ensuring your message resonates worldwide. Welcome to a new era of
        limitless reach and cross-cultural impact!
      </p>
      <Link to={`/services`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-10 rounded-lg bg-[#3869e7] px-5 py-1 text-lg text-white shadow-md duration-300 hover:bg-[#1345c5] md:px-6 md:py-3 md:text-2xl"
        >
          Explore all services
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
