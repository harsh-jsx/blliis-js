import React from "react";
import hero from "../../assets/hero.mp4";

const ServicesHero = () => {
  return (
    <div className="w-full h-[65vh]">
      <video
        src={hero}
        muted
        autoPlay
        loop
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
};

export default ServicesHero;
