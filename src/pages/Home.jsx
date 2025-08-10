import React from "react";
import Hero from "../components/Home/Hero";
import Brief from "../components/Home/Brief";
import LocationAndReviews from "../components/Home/LocationAndReviews";
import CelebritySlider from "../components/Home/CelebritySlider";
import { CardCarousel } from "../components/Home/swiper";
import HomeArtists from "../components/Home/HomeArtists";
import HomeCollaborations from "../components/Home/HomeCollaborations";
import Testimonials from "../components/Home/Testimonials";
import trustedone from "../assets/trustedone.mp4";
import trustedtwo from "../assets/trustedtwo.mp4";
import trustedthree from "../assets/trustedthree.mp4";
import Parallax from "../components/Home/Parallax";
import SwiperTest from "../components/Home/SwiperTest";
import Countdown from "../lib/CountDown";
import HomeBlog from "../components/Home/HomeBlog";
import HomeServices from "../components/Home/HomeServices";

const images = [
  {
    src: trustedone,
    alt: "Image 1",
    type: "vid",
  },
  {
    src: trustedtwo,
    alt: "Image 2",
    type: "vid",
  },
  {
    src: trustedthree,
    alt: "Image 3",
    type: "vid",
  },
  {
    src: "https://www.mgfilmproductions.com/uploads/1/4/5/8/145812880/515640122_3.jpeg",
    alt: "Image 1",
    type: "image",
  },
  {
    src: "https://www.mgfilmproductions.com/uploads/1/4/5/8/145812880/389783587_3.jpg",
    alt: "Image 2",
    type: "image",
  },
  {
    src: "https://i0.wp.com/www.allmyfriendsaremodels.com/wp-content/uploads/2024/02/image-1.png?fit=500%2C667&ssl=1",
    alt: "Image 3",
    type: "image",
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <Brief />
      {/* <LocationAndReviews /> */}
      <h1
        className="text-center my-12 font-bold text-5xl"
        style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
      >
        Who has <br /> Trusted Us
      </h1>
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
      <h1
        className="text-center my-12 font-bold text-5xl"
        style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
      >
        Artists worked <br /> with us
      </h1>
      <HomeArtists />
      <h1
        className="text-center my-12 font-bold text-5xl"
        style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
      >
        Most Popular <br /> Services
      </h1>
      <HomeServices />
      <SwiperTest />
      <h1
        className="text-center my-12 font-bold text-5xl"
        style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
      >
        Brand Collaborations
      </h1>
      <HomeCollaborations />
      <Testimonials />
      <HomeBlog />
    </div>
  );
};

export default Home;
