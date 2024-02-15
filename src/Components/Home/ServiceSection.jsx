import React from "react";
import ServiceCard from "./ServiceCard";
import video from "../../assets/videoIn.svg";
import fb_reels from "../../assets/fb_reels.png";
import insta_reels from "../../assets/isnta_reels.png";
import tiktok from "../../assets/tiktok.png";
import yt_shorts from "../../assets/yt_shorts.png";
import youtube from "../../assets/youtube.png";
import facebook from "../../assets/fb_watch.png";

const ServiceSection = () => {
  const services = [
    {
      title: "Facebook Reels",
      desc: "Elevate your social media presence with captivating Facebook Reels. Our team crafts visually stunning content that sparks engagement and leaves a lasting impression on your audience.",
      img: fb_reels,
    },
    {
      title: "Instagram Reels",
      desc: "Ignite your Instagram feed with dynamic Reels that stop the scroll. From trending dances to behind-the-scenes moments, our experts ensure your content shines and connects with audiences worldwide.",
      img: insta_reels,
    },
    {
      title: "Tiktok",
      desc: "Unleash your creativity on TikTok with attention-grabbing videos that resonate with its vibrant community. Let us help you make waves on the world's fastest-growing video platform.",
      img: tiktok,
    },
    {
      title: "YouTube Shorts",
      desc: "Step into the spotlight with YouTube Shorts and captivate a global audience in seconds. Our tailored content strategy ensures your Shorts leave a lasting impact and keep viewers coming back for more.",
      img: yt_shorts,
    },
    {
      title: "Facebook Video",
      desc: "Engage and captivate your Facebook audience with expertly translated videos. Elevate your presence on the platform and connect with viewers around the globe with our professional content services.",
      img: facebook,
    },
    {
      title: "YouTube",
      desc: "Unlock the full potential of YouTube with professionally translated videos that resonate with audiences worldwide. From in-depth tutorials to captivating storytelling, we help you reach new heights on the platform.",
      img: youtube,
    },
  ];

  return (
    <section className="py-28 md:px-24 px-10">
      <div className="flex w-full flex-col items-center gap-7 ">
        <h1 className="md:text-7xl text-4xl text-center font-bold">OUR DISTRIBUTION</h1>
        {/* <p className="w-[30%] border text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          cupiditate.
        </p> */}
      </div>
      <div className="mt-32 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            desc={service.desc}
            img={service.img}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
