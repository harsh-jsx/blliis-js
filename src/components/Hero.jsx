import React from "react";
import IMG_9072 from "../assets/IMG_9072.mov";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.from("#hero-header span", {
      filter: "blur(20px)",
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: {
        amount: 0.5,
        from: "start",
      },
    });
    gsap.from("#hero-subheader", {
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });
    gsap.from("#hero-button", {
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });
  });

  return (
    <div className="relative h-screen max-sm:h-[70vh]">
      <div className="flex flex-col absolute justify-center items-center gap-4 h-full max-sm:pt-16 w-full z-10000">
        <h1
          id="hero-header"
          className="text-[7rem] font-bold text-white text-center max-md:text-[4rem] max-sm:text-[2rem]"
        >
          <span>
            {"Blliis by Ravissant"
              .split("")
              .map((char, idx) =>
                char === " " ? (
                  <span key={idx}>&nbsp;</span>
                ) : (
                  <span key={idx}>{char}</span>
                )
              )}
          </span>
        </h1>
        <p
          id="hero-subheader"
          className="text-white opacity-60 text-center max-md:text-[14px] max-sm:text-[10px] w-[80%]"
        >
          IMMERSE YOURSELVES IN A LUXURIOUS ORDEAL THAT LEAVES YOU REJUVENATED
          LIKE NEVER BEFORE
        </p>
        <button
          className="cursor-pointer mt-42 bg-white p-4 px-8 max-sm:p-3"
          id="hero-button"
        >
          Get Appointment
        </button>
      </div>
      <div className="absolute z-[1] top-0 left-0 w-full h-full bg-black">
        <video
          src={IMG_9072}
          muted
          autoPlay
          loop
          className="w-full h-full object-cover opacity-40 z-[-10]"
        ></video>
      </div>
    </div>
  );
};

export default Hero;
