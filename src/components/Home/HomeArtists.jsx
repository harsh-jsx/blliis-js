import React from "react";
import artistOne from "../../assets/artistOne.mp4";
import artistTwo from "../../assets/artistTwo.mp4";
import artistThree from "../../assets/artistThree.mp4";
import artistsdemo from "../../assets/artistsdemo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useEmblaCarousel from "embla-carousel-react";

gsap.registerPlugin(useGSAP);

const Artists = [
  {
    name: "Artist One",
    url: artistsdemo,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
    bgColor: "#F5F1FB",
    textColor: "#9F62FF",
  },
  {
    name: "Artist One",
    url: artistsdemo,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
    bgColor: "#F6F7FD",
    textColor: "#40A0CE",
  },
  {
    name: "Artist One",
    url: artistsdemo,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
    bgColor: "#F1F9F7",
    textColor: "#02AB8C",
  },
];

const HomeArtists = () => {
  useGSAP(() => {
    gsap.from("#home-artist-container div", {
      scrollTrigger: {
        trigger: "#home-artist-container",
        top: "start 20%",
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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#artists-container",
        start: "top 100%",
        end: "33% 80%",
        scrub: 1,
        markers: false,
      },
    });

    tl.from("#home-artist-container-mobile .artist-card-1", {
      duration: 1,
      x: 200,
      opacity: 0,
      rotateZ: "-30deg",
      ease: "power2.Out",
      stagger: {
        amount: 0.5,
        from: "start",
      },
    });

    const tltwo = gsap.timeline({
      scrollTrigger: {
        trigger: "#artists-container",
        start: "33% 100%",
        end: "66% 80%",
        scrub: 1,
        markers: false,
      },
    });

    tltwo.from("#home-artist-container-mobile .artist-card-2", {
      duration: 1,
      x: -200,
      opacity: 0,
      rotateZ: "-30deg",
      ease: "power2.Out",
      stagger: {
        amount: 0.5,
        from: "start",
      },
    });

    const tlthree = gsap.timeline({
      scrollTrigger: {
        trigger: "#artists-container",
        start: "66% 100%",
        end: "99% 80%",
        scrub: 1,
        markers: false,
      },
    });

    tlthree.from("#home-artist-container-mobile .artist-card-3", {
      duration: 1,
      x: 200,
      opacity: 0,
      rotateZ: "-30deg",
      ease: "power2.Out",
      stagger: {
        amount: 0.5,
        from: "start",
      },
    });
  });

  return (
    <div
      className="flex justify-center items-center w-full py-8 flex-col mt-8 overflow-hidden"
      id="artists-container"
    >
      <div
        className="flex justify-between max-md:hidden flex-wrap items-center w-[90%] h-full max-md:flex-col max-md:gap-8"
        id="home-artist-container"
      >
        {Artists.map((artist, index) => (
          <div
            key={index}
            className={`w-full max-w-[500px]  h-[600px] p-6 rounded-[40px]  overflow-hidden flex flex-col gap-4 `}
            style={{ backgroundColor: artist.bgColor }}
          >
            <div
              className="p-4 bg-white w-14 flex justify-center items-center font-bold rounded-full "
              style={{ color: artist.textColor }}
            >
              <p>0{index + 1}</p>
            </div>
            <h1
              className="font-bold text-4xl"
              style={{ color: artist.textColor }}
            >
              {artist.name}
            </h1>
            <p className="text-lg" style={{ color: artist.textColor }}>
              {artist.text}
            </p>
            <img
              src={artist.url}
              alt="dasfdaf"
              className="w-64 mt-4 self-center object-contain relative bottom-0"
            />
          </div>
        ))}
      </div>
      <div
        className="justify-between hidden max-md:flex flex-wrap items-center w-[95%] h-full max-md:flex-col max-md:gap-8"
        id="home-artist-container-mobile"
      >
        {Artists.map((artist, index) => (
          <div
            key={index}
            className={`w-full max-w-[500px] h-[500px] p-4 rounded-[40px]  overflow-hidden flex flex-col gap-4 artist-card-${
              index + 1
            }`}
            style={{ backgroundColor: artist.bgColor }}
          >
            <div
              className="p-4 bg-white w-14 flex justify-center items-center font-bold rounded-full "
              style={{ color: artist.textColor }}
            >
              <p>0{index + 1}</p>
            </div>
            <h1
              className="font-bold text-4xl"
              style={{ color: artist.textColor }}
            >
              {artist.name}
            </h1>
            <p className="text-lg" style={{ color: artist.textColor }}>
              {artist.text}
            </p>
            <img
              src={artist.url}
              alt="dasfdaf"
              className="w-64 mt-4 self-center object-contain relative bottom-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeArtists;
