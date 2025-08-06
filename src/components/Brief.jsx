import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const breifs = [
  {
    label: "Years",
    value: "25+",
  },
  {
    label: "Clients",
    value: "7893+",
  },
  {
    label: "Awards",
    value: "15+",
  },
  {
    label: "Brand collaboration",
    value: "50+",
  },
  {
    label: "Salon in delhi",
    value: "#1",
  },
];

const Brief = () => {
  useGSAP(() => {
    gsap.from("#brief-header", {
      scrollTrigger: {
        trigger: "#brief-header",
        start: "top 100%",
      },
      duration: 1,
      filter: "blur(20px)",
      opacity: 0,
      ease: "power2.Out",
      delay: 1,
    });
    gsap.from("#brief-details .brief-card", {
      scrollTrigger: {
        trigger: "#brief-details",
        start: "top 100%",
      },
      duration: 1,
      filter: "blur(20px)",
      y: 200,
      opacity: 0,
      ease: "power2.Out",
      delay: 1,
      stagger: {
        amount: 0.5,
        from: "start",
      },
    });
  });

  return (
    <div className="flex justify-center items-center w-full py-8 flex-col">
      <h1 className="text-6xl font-bold my-8 max-md:text-2xl max-sm:text-3xl">
        About Us
      </h1>
      <h1
        className="w-[90%] text-3xl max-md:text-lg max-sm:text-sm text-center"
        id="brief-header"
      >
        Our expert stylists focus on precision, care, and customer satisfaction,
        ensuring that every client leaves feeling rejuvenated and confident.
        From haircuts and trims to luxurious massages and advanced grooming
        treatments, we offer a wide range of services designed to enhance your
        look and elevate your experience. At BLLIIS, we believe in creating a
        space where you can relax, unwind, and trust that you're in the hands of
        professionals who truly understand your needs.
      </h1>
      <div
        id="brief-details"
        className="flex justify-between max-md:flex-wrap items-center gap-8 max-sm:flex-wrap w-[90%] mt-18"
      >
        {breifs.map((brief) => (
          <div
            key={breifs.label}
            className="flex flex-col gap-2 max-md:items-center brief-card p-4 bg-white w-64 max-sm:w-32 rounded-lg"
          >
            <h1 className="text-black text-6xl font-bold max-md:text-2xl">
              {brief.value}
            </h1>
            <p className="text-2xl max-md:text-sm">{brief.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brief;
