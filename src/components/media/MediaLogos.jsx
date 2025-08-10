import React from "react";

const Logos = [
  "https://logos-world.net/wp-content/uploads/2021/11/Vogue-Logo.png",
  "https://clevertap.com/wp-content/uploads/2022/07/TOI-Logo.png",
  "https://papertownsindia.com/wp-content/uploads/2019/09/Hindustan-Times-Logo-PNG-03118.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/ELLE_Magazine_Logo.svg/1200px-ELLE_Magazine_Logo.svg.png",
  "https://logos-world.net/wp-content/uploads/2023/04/GQ-Logo.png",
];

const MediaLogos = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1600px] w-full justify-between flex-wrap max-sm:justify-center flex gap-4 max-sm:px-4">
        {Logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="brand"
            className="w-42 max-md:w-32 max-sm:w-18 aspect-square object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default MediaLogos;
