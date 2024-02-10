import React from "react";
import AboutSection from "./AboutSection";
import around_world from "../assets/around_world.svg";

const AboutPage = () => {
  return (
    <div className="bg-[#f8f8ff]">
      <section className="flex w-full flex-col items-center justify-center gap-16 px-10 py-16 md:flex-row md:px-10 md:py-10">
        <div className="w-full md:w-1/2">
          <h4 className=" mb-8 inline-block border-b-2 pb-3 text-4xl font-bold text-[#3d67ff]">
            ABOUT US
          </h4>
          <p className=" text-xl text-[#3869e7]">
            Welcome to The Dubbery, the first Bangladeshi dubbing agency
            collaborating with creators worldwide. At The Dubbery, we're
            dedicated to connecting cultures and languages through the art of
            storytelling. By partnering with creators from around the globe, we
            curate and translate content to make it accessible to diverse
            audiences everywhere.
          </p>
        </div>
        <div className="flex w-[70%] items-center md:w-[40%]">
          <img
            className="h-full w-full"
            src={around_world}
            alt="around-worlds"
          />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default AboutPage;
