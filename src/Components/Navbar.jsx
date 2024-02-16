import React, { useState } from "react";
import logo from "../images/logo.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  // State for controlling the mobile navigation menu
  const [navmenu, setNavmenu] = useState(false);

  // Function to handle link click and close the navbar in mobile view
  const handleLinkClick = () => {
    setNavmenu(false);
  };

  // Framer Motion variants for animating the navigation menu
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
      {/* Logo */}
      <Link to={`/`}>
        <img className="h-8" src={logo} alt="the-dubbery_logo" />
      </Link>
      
      {/* Desktop navigation */}
      <div className="hidden gap-10 text-lg font-medium text-white md:flex xl:flex">
        <Link to={`/`} className="hover:underline" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to={`/about`} className="hover:underline" onClick={handleLinkClick}>
          About
        </Link>
        <Link to={`/services`} className="hover:underline" onClick={handleLinkClick}>
          Services
        </Link>
        <Link to={`/contact`} className="hover:underline" onClick={handleLinkClick}>
          Contact
        </Link>
      </div>
      
      {/* Mobile navigation */}
      <div>
        <Link to={`/contact`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden rounded-lg bg-[#3869e7] px-5 py-1 text-lg text-white shadow-md duration-300 hover:bg-[#1345c5] md:block"
          >
            Get in touch
          </motion.button>
        </Link>
        {/* Hamburger menu icon */}
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
        
        {/* Mobile navigation menu */}
        <div>
          <AnimatePresence>
            {navmenu && (
              <motion.div
                variants={navVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute left-0 top-[90px] flex h-[calc(100vh-90px)] w-full origin-top flex-col items-center justify-center gap-10 bg-black text-xl text-white"
              >
                {/* Links */}
                <Link to={`/`} className="hover:underline" onClick={handleLinkClick}>
                  Home
                </Link>
                <Link to={`/about`} className="hover:underline" onClick={handleLinkClick}>
                  About
                </Link>
                <Link to={`/services`} className="hover:underline" onClick={handleLinkClick}>
                  Services
                </Link>
                <Link to={`/contact`} className="hover:underline" onClick={handleLinkClick}>
                  Contact
                </Link>
                {/* Button */}
                <Link to={`/services`} onClick={handleLinkClick}>
                  <button className="rounded-lg bg-[#3869e7] px-5 py-1 text-lg text-white shadow-md duration-300 hover:bg-[#1345c5]">
                    Explore all services
                  </button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
