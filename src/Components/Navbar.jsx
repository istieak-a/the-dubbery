import React, { useState } from "react";
import logo from "../images/logo.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navmenu, setNavmenu] = useState(false);
  const navVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="flex h-[90px] w-full items-center justify-between bg-[#1f2937] px-5 shadow-lg md:justify-around">
      <img className="h-8" src={logo} alt="the-dubbery_logo" />
      <div className="hidden gap-10 text-lg font-medium text-white md:flex xl:flex">
        <Link to={`/home`} className="hover:underline" href="#">
          Home
        </Link>
        <Link to={`/about`} className="hover:underline" href="#">
          About
        </Link>
        <Link to={`/services`} className="hover:underline" href="#">
          Services
        </Link>
        <Link to={`/contact`} className="hover:underline" href="#">
          Contact
        </Link>
      </div>
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden rounded-lg bg-[#3869e7] px-5 py-1 text-lg text-white shadow-md duration-300 hover:bg-[#1345c5] md:block"
        >
          Get in touch
        </motion.button>
        {navmenu ? (
          <RxCross2
            onClick={() => setNavmenu(!navmenu)}
            className="cursor-pointer text-2xl text-white transition-all duration-300 md:hidden"
          />
        ) : (
          <RxHamburgerMenu
            onClick={() => setNavmenu(!navmenu)}
            className="transci cursor-pointer text-2xl text-white transition-all duration-300 md:hidden"
          />
        )}
        <div>
          {navmenu && (
            <motion.div
            variants={navVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute left-0 top-[90px] flex h-[calc(100vh-90px)] w-full flex-col items-center justify-center gap-10 bg-black text-xl text-white">
              <a className="hover:underline" href="#">
                Home
              </a>
              <a className="hover:underline" href="#">
                About
              </a>
              <a className="hover:underline" href="#">
                Services
              </a>
              <a className="hover:underline" href="#">
                Contact
              </a>
              <button className="rounded-lg bg-[#3869e7] px-5 py-1 text-lg text-white shadow-md duration-300 hover:bg-[#1345c5]">
                Explore all services
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
