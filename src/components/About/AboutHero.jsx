import React from "react";
import hero from "../../assets/hero.mp4";

const AboutHero = () => {
  return (
    <div className="w-full h-[80vh] relative bg-black flex justify-center items-center flex-col gap-4 px-4">
      <video
        src={hero}
        muted
        autoPlay
        loop
        className="w-full h-full object-cover absolute opacity-40 z-1"
      ></video>
      <div className="flex flex-col items-center z-10 gap-5">
        <h1
          className="text-center font-bold text-5xl text-white"
          style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
        >
          Where Beauty <br /> Finds it's true form
        </h1>
        <p className="text-white text-center text-lg max-w-lg opacity-60">
          A creation of Ravissant, India's pioneer in luxury lifestyle, blending
          decades of elegance with modern beauty artistry.
        </p>
        <button className="bg-black max-sm:px-0 max-sm:w-full text-white px-32 py-3 cursor-pointer rounded-xl">
          Book your experience
        </button>
        <button className="bg-white max-sm:px-0 max-sm:w-full text-black px-32 py-3 cursor-pointer rounded-xl">
          Explore Our Story
        </button>
      </div>
    </div>
  );
};

export default AboutHero;
