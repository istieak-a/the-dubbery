import React from "react";
import around_world from "../assets/around_world.svg";
import our_mission from "../assets/ourMission.png";
import "../assets/custom.css";
const Card = ({ title, content }) => {
  return (
    <div className="card-container flex h-[300px] w-[300px] flex-col flex-wrap items-start gap-5 rounded-xl border p-10 shadow-xl">
      <h4 className="card-title text-2xl font-bold text-[#3d67ff]">{title}</h4>
      <p className="text-sm">{content}</p>
      <button className="rounded-lg bg-[#3d67ff] px-8 py-2 text-white">
        Learn More
      </button>
    </div>
  );
};

const AboutPage = () => {
  const cardData = [
    {
      id: 1,
      title: "Diversity",
      content:
        "We celebrate the richness of cultural diversity and aim to amplify underrepresented voices from around the world.",
    },
    {
      id: 2,
      title: "Inclusivity",
      content:
        "We believe that everyone should have access to content that resonates with them, regardless of language or location.",
    },
    {
      id: 3,
      title: "Quality",
      content:
        "We are committed to delivering high-quality dubbing services that honor the original content and captivate audiences.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#f8f8ff]">
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
      <section className="flex w-full flex-col-reverse items-center justify-center gap-16 px-10 py-16 md:flex-row md:px-10 md:py-10">
        <div className="flex w-[70%] items-center md:w-[40%]">
          <img
            className="h-full w-full"
            src={our_mission}
            alt="around-worlds"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h4 className=" mb-8 inline-block border-b-2 pb-3 text-4xl font-bold text-[#3d67ff]">
            Our Mission
          </h4>
          <p className=" text-xl text-[#3869e7]">
            At The Dubbery, our mission is to bridge cultures, languages, and
            ideas through the power of storytelling. We believe that every voice
            deserves to be heard, and we're committed to providing a platform
            where diverse narratives can thrive.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 py-10 md:flex-row md:py-20">
        {cardData.map((card) => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </section>
      {/* <section className="pb-20">
        <h1 className="text-center text-5xl font-bold ">Our Team</h1>
      </section> */}
    </div>
  );
};

export default AboutPage;
