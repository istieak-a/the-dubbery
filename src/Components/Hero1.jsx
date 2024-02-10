import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex h-[calc(100vh-90px)] w-full items-center justify-center bg-[#101827] text-white">
      <div className="mx-10 flex flex-col items-center gap-3 text-center">
        <h1 className="font-gilroy xl:w-[70%] text-5xl font-black md:text-7xl xl:text-8xl">
          Meet with your global audience!
        </h1>
        <p className="w-1/2 text-xs line-clamp-3">Break language barriers and connect with a global audience! Our audio translation services bring your content to life in multiple languages, ensuring your message resonates worldwide. Welcome to a new era of limitless reach and cross-cultural impact!</p>
        <Link to={`/services`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 rounded-lg bg-[#3869e7] px-5 py-1 text-lg text-white shadow-md duration-300 hover:bg-[#1345c5] md:px-6 md:py-3 md:text-2xl"
        >
          Explore all services
        </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
