import React from "react";

const AboutCard = ({ title, desc, img }) => {
  // console.log(img);
  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-2 pb-5">
      <img className="w-56" src={img} />
      <div className="text-center md:text-left flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
        <p className="md:w-[80%]">{desc}</p>
      </div>
    </div>
  );
};

export default AboutCard;
