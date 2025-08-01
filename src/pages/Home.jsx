import React from "react";
import Hero from "../components/Hero";
import Brief from "../components/Brief";
import LocationAndReviews from "../components/LocationAndReviews";
import CelebritySlider from "../components/CelebritySlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brief />
      <LocationAndReviews />
      <h1 className="text-center my-12 font-bold text-5xl">
        Who has Trusted Us
      </h1>
      <CelebritySlider />
    </div>
  );
};

export default Home;
