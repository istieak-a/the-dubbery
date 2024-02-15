import React from "react";

const Card = ({ img, title, desc }) => {
  return (
    <div className="w-[300px] h-full flex flex-col gap-20">
      <div className="h-[30%] border">
        <img className="" src={img} alt="" />
      </div>
      <div className="h-[70%] border">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
