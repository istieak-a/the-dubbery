import React from "react";
import ServiceCard from "./ServiceCard";
import video from '../assets/videoIn.svg'

const ServiceSection = () => {
  const services = [
    {
      title: "Facebook Reels",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
      title: "Instagram Reels",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
      title: "Tiktok",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
    {
      title: "Youtube Shorts",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row-reverse gap-10 px-5 md:px-20 py-20">
      <div className="md:w-[70%] md:flex md:flex-col md:gap-5">
        <h1 className="text-[10px] font-bold text-[#3d67ff]">OUR SERVICE</h1>
        <h2 className="text-3xl font-bold text-[#3869e7]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
          nihil?
        </h2>
        <img className="hidden md:block w-1/2 mx-20" src={video} />
      </div>
      <div className="flex flex-col gap-5">
        {services.map((pd, index) => {
          return <ServiceCard key={index} title={pd.title} desc={pd.desc} />;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
