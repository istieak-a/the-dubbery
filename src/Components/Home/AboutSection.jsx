import React from "react";
import wave from "../../assets/wave.svg";
import artist from "../../assets/voice_artist.png";
const AboutSection = () => {
  return (
    <div className=" bg-[#F8F8FF]">
      <img src={wave} alt="wave" className="absolute z-10 w-full md:hidden" />
      <div className="py-28 flex flex-col md:flex-row md:px-5 lg:px-20 items-center gap-10 lg:gap-20">
        <img className="w-[300px]" src={artist} />
        <div className="px-8 flex flex-col gap-3">
          <h1 className="text-[10px] lg:text-sm font-medium text-[#3d67ff]">ABOUT US</h1>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-[#3869e7]">We make sure your content is available in major languages globally.</h1>
          <p className="pt-2 text-sm w-[80%] md:w-full lg:w-[70%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, quae cum molestias magni cumque facilis natus beatae omnis vero incidunt?</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
