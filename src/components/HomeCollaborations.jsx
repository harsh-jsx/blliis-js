import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const CollabsLogo = [
  "https://logos-world.net/wp-content/uploads/2020/09/Lakme-Logo-2011-2019.png",
  "https://logos-world.net/wp-content/uploads/2020/11/Pantene-Logo.png",
  "https://logos-world.net/wp-content/uploads/2020/04/LOreal-Logo.png",
  "https://logos-world.net/wp-content/uploads/2020/12/Kerastase-Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/Logo_for_Atlanta_Fashion_Week.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/Gucci_logo.png",
];

const HomeCollaborations = () => {
  useGSAP(() => {
    gsap.from("#home-collabs-container img", {
      scrollTrigger: {
        trigger: "#home-collabs-container",
        top: "start 100%",
      },
      y: 200,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1,
      stagger: {
        from: "center",
        amount: 0.5,
      },
    });
  });

  return (
    <div className="flex justify-center items-center w-full py-8 flex-col mt-8">
      <div
        className="flex justify-between flex-wrap items-center w-[90%] h-full max-md:gap-8"
        id="home-collabs-container"
      >
        {CollabsLogo.map((logo, index) => (
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

export default HomeCollaborations;
