import React from "react";
import ServiceCard from "./ServiceCard";

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
    <div className="flex h-screen flex-col gap-10 px-5 py-10">
      <div>
        <h1 className="text-[10px] font-bold text-[#3d67ff]">OUR SERVICE</h1>
        <h2 className="text-3xl font-bold text-[#3869e7]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
          nihil?
        </h2>
      </div>
      <div className="flex flex-col gap-5">
        {services.map((pd) => {
          return <ServiceCard title={pd.title} desc={pd.desc} />;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
