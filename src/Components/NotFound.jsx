import React from "react";
import error from "../assets/not-found.svg"

const NotFound = () => {
  return (
    <div className="py-[10vh] flex gap-10 flex-col items-center justify-center">
        <img src={error} alt="error" className="w-[40%]" />
      <h1 className="text-xl">Sorry your requested page not found!</h1>
    </div>
  );
};

export default NotFound;
