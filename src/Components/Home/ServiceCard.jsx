import React from "react";

const ServiceCard = ({ title, desc, img}) => {
  return (
    <div className="flex w-[400px] cursor-pointer flex-col items-center gap-10 rounded-md py-10 shadow-md duration-500 hover:bg-[#3869e7] hover:text-white hover:shadow-none">
      <img className="w-14" src={img} alt="" />
      <div className="px-10 text-center">
        <h1 className="pb-3 text-3xl font-semibold">{title}</h1>
        <p className="text-sm">{desc}</p>
      </div>
      {/* <IoArrowForwardCircle className="text-3xl" /> */}
    </div>
  );
};

export default ServiceCard;
