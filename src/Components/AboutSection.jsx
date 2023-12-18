import React from "react";
import wave from "../assets/wave.svg";
import Card from "./Card";
import AboutCard from "./AboutCard";
const AboutSection = () => {
  const cardData = [
    {
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quos.",
    },
    {
      title: "App Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quos.",
    },
    {
      title: "Software Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quos.",
    },
    {
      title: "Digital Marketing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,quos.",
    },
  ];
  const aboutData = [
    {title: "Our Story", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolorem dolore doloribus consequatur dolor animi dicta esse repellendus necessitatibus quos!", img: "../assets/ourStory.svg"},
    {title: "Our Mission", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolorem dolore doloribus consequatur dolor animi dicta esse repellendus necessitatibus quos!", img: "../assets/ourMission.svg"},
    {title: "Our Vision", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolorem dolore doloribus consequatur dolor animi dicta esse repellendus necessitatibus quos!", img: "../assets/ourVision.svg"},
  ]
  return (
    <div className="h-screen">
      <img src={wave} alt="wave" className="absolute z-10 w-full md:hidden" />
      <div className="flex flex-col gap-3 px-10 py-28">
        <h1 className="rounded-md bg-[#101827] py-1 text-center text-2xl font-semibold text-white">
          About Us
        </h1>
        <div>
          {
            aboutData.map((item) => {
              return <AboutCard title={item.title} desc={item.desc} img={item.img} />
            })
          }
        </div>
      </div>
      {/* <div className="flex flex-col gap-5">
        {cardData.map((item) => {
          return <Card title={item.title} desc={item.desc} />;
        })}
      </div> */}
    </div>
  );
};

export default AboutSection;
