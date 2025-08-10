import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Parallax from "./Parallax";
import NumberFlow from "@number-flow/react";

gsap.registerPlugin(useGSAP);

const Brief = () => {
  const [briefs, setbriefs] = useState([
    {
      label: "Years",
      value: {
        symbol: "+",
        number: 0,
      },
    },
    {
      label: "Clients",
      value: {
        symbol: "+",
        number: 0,
      },
    },
    {
      label: "Awards",
      value: {
        symbol: "+",
        number: 0,
      },
    },
    {
      label: "Brand collaboration",
      value: {
        symbol: "+",
        number: 0,
      },
    },
    {
      label: "Salon in delhi",
      value: {
        symbol: "#",
        number: 0,
      },
    },
  ]);

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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#brief-details",
        start: "top 100%",
        end: "bottom 80%",
        scrub: 1,
        markers: false,
      },
      onStart: () => {
        setbriefs([
          {
            label: "Years",
            value: {
              symbol: "+",
              number: 25,
            },
          },
          {
            label: "Clients",
            value: {
              symbol: "+",
              number: 7896,
            },
          },
          {
            label: "Awards",
            value: {
              symbol: "+",
              number: 15,
            },
          },
          {
            label: "Brand collaboration",
            value: {
              symbol: "+",
              number: 50,
            },
          },
          {
            label: "Salon in delhi",
            value: {
              symbol: "#",
              number: 1,
            },
          },
        ]);
      },
    });

    tl.from("#brief-details .brief-card", {
      duration: 1,
      filter: "blur(20px)",
      y: 200,
      opacity: 0,
      ease: "power2.Out",
      stagger: {
        amount: 0.5,
        from: "start",
      },
    });

    // gsap.from("#brief-details .brief-card", {
    //   scrollTrigger: {
    //     trigger: "#brief-details",
    //     start: "top 100%",
    //   },
    //   duration: 1,
    //   filter: "blur(20px)",
    //   y: 200,
    //   opacity: 0,
    //   ease: "power2.Out",
    //   delay: 1,
    //   stagger: {
    //     amount: 0.5,
    //     from: "start",
    //   },
    // });
  });

  return (
    <>
      <div className="flex justify-center items-center w-full py-8 flex-col bg-white">
        <h1
          className="text-6xl font-bold my-8 max-md:text-2xl max-sm:text-3xl"
          style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
        >
          About Us
        </h1>
        <h1
          className="w-[90%] text-3xl max-md:text-lg max-sm:text-sm text-center"
          id="brief-header"
        >
          Our expert stylists focus on precision, care, and customer
          satisfaction, ensuring that every client leaves feeling rejuvenated
          and confident. From haircuts and trims to luxurious massages and
          advanced grooming treatments, we offer a wide range of services
          designed to enhance your look and elevate your experience. At BLLIIS,
          we believe in creating a space where you can relax, unwind, and trust
          that you're in the hands of professionals who truly understand your
          needs.
        </h1>
      </div>
      <Parallax />
      <div className="flex justify-center items-center w-full py-24 flex-col bg-[#000]">
        <div
          id="brief-details"
          className="flex justify-between max-sm:justify-center max-md:flex-wrap items-center gap-8 max-sm:flex-wrap w-[90%]"
        >
          {briefs.map((brief) => (
            <div
              key={brief.label}
              className="flex flex-col gap-2 max-sm:aspect-square max-sm:justify-center max-md:items-center brief-card p-4  bg-white text-black w-64 max-sm:w-32 rounded-sm"
            >
              <h1 className="text-6xl font-bold max-md:text-2xl flex items-center">
                <NumberFlow value={brief.value.number} />
                {brief.value.symbol}
              </h1>

              <p className="text-2xl max-md:text-sm max-sm:text-center">
                {brief.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brief;
