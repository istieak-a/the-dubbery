import React from "react";
import ServiceCard from "./ServiceCard";
import video from "../../assets/videoIn.svg";

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
    <div className="flex w-full gap-10 border border-red-500 px-20 py-20">
      <div className="flex w-2/5 flex-col border border-red-500">
        {services.map((pd, index) => {
          return <ServiceCard key={index} title={pd.title} desc={pd.desc} />;
        })}
      </div>
      <div className="flex w-3/5 flex-col border border-red-600">
        <div className="h-[40%]">
          <h1 className="text-[10px] font-bold text-[#3d67ff]">OUR SERVICE</h1>
          <h2 className="text-3xl font-bold text-[#3869e7]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
            nihil?
          </h2>
        </div>
        <div className="flex h-[60%] items-center justify-center bg-blue-400">
          <img className="w-[300px]" src={video} alt="Video" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
