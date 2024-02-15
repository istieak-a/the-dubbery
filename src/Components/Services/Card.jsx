import React from "react";

const Card = ({ img, title, desc }) => {
  return (
    <div className="w-[400px] flex flex-col gap-10 shadow-xl p-10 rounded-xl">
      <div className="h-[40%] flex items-center justify-center">
        <img className="w-[35%] object-cover" src={img} alt="" />
      </div>
      <div className="h-[60%] flex gap-3 flex-col justify-center items-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm text-center">{desc}</p>
      </div>
    </div>
  );
};

export default Card;