import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";

const ServiceCard = ({ title, desc }) => {
  return (
    <div className="flex w-full cursor-pointer items-center rounded-md p-5 shadow-md duration-500 hover:bg-[#3869e7] hover:text-white hover:shadow-none">
      <div className="w-[90%]">
        <h1 className="pb-3 text-2xl font-semibold">{title}</h1>
        <p className="w-[80%] text-sm">{desc}</p>
      </div>
      <IoArrowForwardCircle className="text-3xl" />
    </div>
  );
};

export default ServiceCard;
