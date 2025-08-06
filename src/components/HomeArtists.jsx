import React from "react";
import artistOne from "../assets/artistOne.mp4";
import artistTwo from "../assets/artistTwo.mp4";
import artistThree from "../assets/artistThree.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useEmblaCarousel from "embla-carousel-react";

gsap.registerPlugin(useGSAP);

const Artists = [
  {
    url: artistOne,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium quaerat fuga sint aspernatur nostrum corrupti enim veritatis quisquam qui quis, quas vel deserunt reprehenderit neque a assumenda laudantium eius. Id molestiae excepturi corrupti sint iste optio praesentium consequatur tenetur, tempora ex ipsam, accusamus quae in? Recusandae officia at illo labore hic vitae eius magni rem, modi pariatur omnis repudiandae.",
  },
  {
    url: artistTwo,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium quaerat fuga sint aspernatur nostrum corrupti enim veritatis quisquam qui quis, quas vel deserunt reprehenderit neque a assumenda laudantium eius. Id molestiae excepturi corrupti sint iste optio praesentium consequatur tenetur, tempora ex ipsam, accusamus quae in? Recusandae officia at illo labore hic vitae eius magni rem, modi pariatur omnis repudiandae.",
  },
  {
    url: artistThree,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium quaerat fuga sint aspernatur nostrum corrupti enim veritatis quisquam qui quis, quas vel deserunt reprehenderit neque a assumenda laudantium eius. Id molestiae excepturi corrupti sint iste optio praesentium consequatur tenetur, tempora ex ipsam, accusamus quae in? Recusandae officia at illo labore hic vitae eius magni rem, modi pariatur omnis repudiandae.",
  },
];

const HomeArtists = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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
  });

  return (
    <div className="flex justify-center items-center w-full py-8 flex-col mt-8">
      <div
        className="flex justify-between flex-wrap items-center w-[90%] h-full max-md:flex-col max-md:gap-8"
        id="home-artist-container"
      >
        {Artists.map((artist, index) => (
          <div
            key={index}
            className="w-full max-w-[500px] overflow-hidden flex flex-col gap-4 p-4 "
            style={{ boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.1)" }}
          >
            <video
              src={artist.url}
              muted
              autoPlay
              loop
              playsInline
              className="h-[400px] w-full object-cover"
            ></video>
            <p className="text-lg max-sm:text-sm">{artist.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeArtists;
