import React from "react";
import hero from "../../assets/hero.mp4";

const BlogHero = () => {
  return (
    <div className="w-full h-[60vh] relative bg-black flex justify-center items-center flex-col gap-4 px-4">
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
          Our Blog
        </h1>
        <p className="text-white text-center text-lg max-w-lg opacity-60">
          Insights, Inspiration, and our updates
        </p>
      </div>
    </div>
  );
};

export default BlogHero;
