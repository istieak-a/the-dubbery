import React from "react";
import wave from "../../assets/wave.svg";
import artist from "../../assets/voice_artist.png";
const AboutSection = () => {
  return (
    <div className=" bg-[#F8F8FF]">
      <img src={wave} alt="wave" className="absolute z-10 w-full md:hidden" />
      <div className="flex flex-col items-center justify-center md:flex-row gap-20 px-[10vw] py-[15vh]">
        <img className="w-[300px]" src={artist} />
        <div className="">
          <h1 className="text-[10px] font-medium text-[#3d67ff] lg:text-sm">
            ABOUT US
          </h1>
          <h1 className="text-3xl font-bold text-[#3869e7] md:text-4xl lg:text-6xl">
            We make sure your content is available in major languages globally.
          </h1>
          <p className=" text-sm mt-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
            quae cum molestias magni cumque facilis natus beatae omnis vero
            incidunt?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
