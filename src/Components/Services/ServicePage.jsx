import React from "react";
import Card from "./Card";
import translation from "../../assets/translation.png";
import video_edit from "../../assets/video_edit.png";
import optimization from "../../assets/optimization.png";
import distribution from "../../assets/distribution.png";

const ServicePage = () => {
  const services = [
    {
      img: translation,
      title: "Expert Translation",
      desc: "Our team of professional translators possesses linguistic fluency and cultural awareness to accurately convey the essence of your content in multiple languages. Whether it's subtitles, voiceovers, or complete script translations, we ensure that your message remains intact while catering to diverse audiences.",
    },
    {
      img: video_edit,
      title: "Creative Editing",
      desc: "We don't just translate – we enhance! Our skilled editors employ creative techniques to ensure that your videos maintain their visual appeal and narrative flow across different languages. From seamless transitions to engaging visual effects, we strive to captivate audiences and keep them hooked from start to finish.",
    },
    {
      img: optimization,
      title: "Platform Optimization",
      desc: "We understand the importance of adapting your content to different platforms. Whether it's YouTube, Facebook, TikTok, or emerging short video platforms, we tailor your videos to meet the unique requirements of each platform, maximizing visibility and engagement.",
    },
    {
      img: distribution,
      title: "Global Distribution",
      desc: "Expand your reach beyond borders! We facilitate the distribution of your translated and edited videos across various regions and platforms, ensuring that your content reaches the widest possible audience. From YouTube Shorts to Instagram Reels, we optimize your content for maximum impact in every corner of the digital world.",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="bg-[#1f2937] py-10 text-white">
        <h1 className="text-center text-5xl font-black">Our Services</h1>
        <div className=" mt-10 flex items-center justify-center">
          <p className="w-[80%] text-center text-xs md:w-1/2">
            Are you a content creator looking to expand your reach across
            linguistic barriers? Look no further! Our dedicated team specializes
            in translating, editing, and optimizing your videos for various
            platforms, ensuring that your message resonates with audiences
            worldwide.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap px-20 py-20 items-center justify-center gap-20">
        {
          services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              desc={service.desc}
              img={service.img}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ServicePage;
