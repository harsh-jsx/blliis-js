import React from "react";
import Hero from "../components/Hero";
import Brief from "../components/Brief";
import LocationAndReviews from "../components/LocationAndReviews";
import CelebritySlider from "../components/CelebritySlider";
import { CardCarousel } from "../components/swiper";
import HomeArtists from "../components/HomeArtists";
import HomeCollaborations from "../components/HomeCollaborations";

const images = [
  {
    src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F1.png&w=256&q=75",
    alt: "Image 1",
  },
  {
    src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F3.png&w=256&q=75",
    alt: "Image 2",
  },
  {
    src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F2.png&w=256&q=75",
    alt: "Image 3",
  },
  {
    src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F1.png&w=256&q=75",
    alt: "Image 1",
  },
  {
    src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F3.png&w=256&q=75",
    alt: "Image 2",
  },
  {
    src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F2.png&w=256&q=75",
    alt: "Image 3",
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <Brief />
      <LocationAndReviews />
      <h1 className="text-center my-12 font-bold text-5xl">
        Who has Trusted Us
      </h1>
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
      <h1 className="text-center my-12 font-bold text-5xl">
        Artists worked with us
      </h1>
      <HomeArtists />
      <h1 className="text-center my-12 font-bold text-5xl">
        Brand Collaborations
      </h1>
      <HomeCollaborations />
    </div>
  );
};

export default Home;
