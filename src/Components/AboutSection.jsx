import React from "react";
import wave from "../assets/wave.svg";
const AboutSection = () => {
  return (
    <div className="h-screen">
      <img src={wave} alt="wave" className="absolute z-10 w-full" />
      <div className="py-28 px-10 flex flex-col gap-3">
        <h1 className="text-center text-2xl font-semibold bg-[#101827] text-white py-1 rounded-md">About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quos.</p>
      </div>
    </div>
  );
};

export default AboutSection;
