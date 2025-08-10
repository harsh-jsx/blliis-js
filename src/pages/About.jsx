import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutServicesCard from "../components/About/AboutServicesCard";
import AboutJourneyCards from "../components/About/AboutJourneyCards";

const About = () => {
  return (
    <div className="">
      <AboutHero />
      <p className="text-center text-2xl my-8">
        A creation of Ravissant, India's pioneer in luxury lifestyle,{" "}
        <br className="max-sm:hidden" /> blending decades of elegance with
        modern beauty artistry.
      </p>
      <h1
        className="text-center my-12 font-bold text-5xl"
        style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
      >
        Our Philosophy
      </h1>
      <p className="text-center text-2xl my-8">
        Billis is dedicated to providing bespoke luxury, artistry, and
        <br className="max-sm:hidden" />
        exceptional service tailored to every guest.
      </p>
      <h1
        className="text-center my-12 font-bold text-5xl"
        style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
      >
        Legacy of ravissant
      </h1>
      <p className="text-center text-2xl my-8">
        Founded in 1981 by Ravi & Mina Chawla, Ravissant is renowned for their
        elevated <br className="max-sm:hidden" /> vision across fashion,{" "}
        couture, and fine craftsmanship. Launched under their legacy,{" "}
        <br className="max-sm:hidden" /> Billis is a high-end salon & spa rooted
        in same tradition of artistry.
      </p>
      <h1
        className="text-center my-12 font-bold text-5xl"
        style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
      >
        What Makes Blliis Unique
      </h1>
      <AboutServicesCard />
      <h1
        className="text-center my-12 font-bold text-5xl"
        style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
      >
        Our Journey
      </h1>
      <p className="text-center text-2xl my-8">
        Since our launch in 2012, we have evolved from a lotus{" "}
        <br className="max-sm:hidden" />
        salon to a personalized, one-of-a-kind destination.
      </p>
      <AboutJourneyCards />
    </div>
  );
};

export default About;
