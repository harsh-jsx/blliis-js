import React from "react";
import Hero from "../components/Hero";
import Brief from "../components/Brief";
import LocationAndReviews from "../components/LocationAndReviews";
import CelebritySlider from "../components/CelebritySlider";

import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselProgress,
  ScrollXCarouselWrap,
} from "../components/scroll-x-carousel";

import {
  CardHoverReveal,
  CardHoverRevealMain,
  CardHoverRevealContent,
} from "../components/reveal-on-hover";
const slides = [
  {
    id: "slide-6",
    title: "UI UX design",
    description:
      "We build a car rental platform for the masses, with a focus on user experience and security, and data privacy.",
    services: ["branding", "design"],
    type: "Agency",
    imageUrl:
      "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-2",
    title: "Blockchain wallet",
    description:
      "We build a Blockchain wallet for the masses, with a focus on security and usability.",
    services: ["branding", "design", "development"],
    type: "blockchain",
    imageUrl:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-3",
    title: "ecommerce store",
    description:
      "We build an ecommerce store for the masses, with a focus on performance and user experience.",
    services: ["branding", "design", "payment getaway", "development"],
    type: "ecommerce",
    imageUrl:
      "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-1",
    title: "SaaS platform",
    description:
      "We build a SaaS platform for the masses, with a focus on user experience and security, and data privacy.",
    services: ["branding", "design", "development"],
    type: "SaaS",
    imageUrl:
      "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-4",
    title: "SEO Optimization",
    description:
      "We build a SaaS platform for the masses, with a focus on user experience and security, and data privacy.",
    services: ["branding", "design", "development"],
    type: "SaaS",
    imageUrl:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <ScrollXCarousel className="h-[150vh]">
        <ScrollXCarouselContainer className="h-screen flex flex-col gap-8 py-12">
          <div className="absolute inset-y-0 left-0 w-[12vw] z-10 bg-gradient-to-r from-white" />
          <div className="absolute inset-y-0 right-0 w-[15vw] z-10 bg-gradient-to-l from-white" />

          <ScrollXCarouselWrap className="flex gap-8 ml-8">
            {slides.map((slide) => (
              <CardHoverReveal
                key={slide.id}
                className="min-w-[70vw] md:min-w-[38vw] border rounded-xl shadow-lg"
              >
                <CardHoverRevealMain>
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full h-auto object-cover"
                  />
                </CardHoverRevealMain>
                <CardHoverRevealContent className="bg-black/60 text-white p-4 rounded-xl">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </CardHoverRevealContent>
              </CardHoverReveal>
            ))}
          </ScrollXCarouselWrap>

          <ScrollXCarouselProgress
            className="bg-gray-200 h-1 mx-8 rounded-full"
            progressStyle="bg-indigo-500 h-full"
          />
        </ScrollXCarouselContainer>
      </ScrollXCarousel>{" "}
    </div>
  );
};

export default Home;
