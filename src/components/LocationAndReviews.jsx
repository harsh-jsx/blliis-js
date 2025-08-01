import React, { useEffect, useState } from "react";
import Map from "../assets/Map.jpg";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const reviews = [
  {
    author_name: "Aarav Kapoor",
    rating: 5,
    text: "Absolutely loved the experience! The staff was professional and the ambiance was perfect.",
    relative_time_description: "2 weeks ago",
  },
  {
    author_name: "Nisha Verma",
    rating: 4,
    text: "Great service and relaxing environment. Slightly pricey but worth it.",
    relative_time_description: "a month ago",
  },
  {
    author_name: "Rahul Singh",
    rating: 3,
    text: "The experience was decent, but the waiting time was too long.",
    relative_time_description: "3 months ago",
  },
  {
    author_name: "Sneha Sharma",
    rating: 5,
    text: "Best spa experience in Delhi! Would definitely come again.",
    relative_time_description: "5 days ago",
  },
  {
    author_name: "Vikram Mehta",
    rating: 2,
    text: "Not satisfied. The service felt rushed and unprofessional this time.",
    relative_time_description: "1 week ago",
  },
  {
    author_name: "Aarav Kapoor",
    rating: 5,
    text: "Absolutely loved the experience! The staff was professional and the ambiance was perfect.",
    relative_time_description: "2 weeks ago",
  },
  {
    author_name: "Nisha Verma",
    rating: 4,
    text: "Great service and relaxing environment. Slightly pricey but worth it.",
    relative_time_description: "a month ago",
  },
  {
    author_name: "Rahul Singh",
    rating: 3,
    text: "The experience was decent, but the waiting time was too long.",
    relative_time_description: "3 months ago",
  },
  {
    author_name: "Sneha Sharma",
    rating: 5,
    text: "Best spa experience in Delhi! Would definitely come again.",
    relative_time_description: "5 days ago",
  },
  {
    author_name: "Vikram Mehta",
    rating: 2,
    text: "Not satisfied. The service felt rushed and unprofessional this time.",
    relative_time_description: "1 week ago",
  },
];

const LocationAndReviews = () => {
  useGSAP(() => {
    gsap.from("#location-and-review-container", {
      scrollTrigger: {
        trigger: "#location-and-review-container",
        start: "top 80%",
      },
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <div
      className="flex justify-center items-center w-full py-8 flex-col mt-8"
      id="location-and-review-container"
    >
      <div className="flex justify-between items-center w-[90%] h-full max-md:flex-col max-md:gap-8">
        <div className="flex flex-col w-[30%] gap-4 max-md:w-full">
          <img src={Map} alt="map-image" />
          <a
            href="https://maps.app.goo.gl/khEBkTdwS26qM5ow9"
            target="_blank"
            className="text-lg max-sm:text-sm"
          >
            50-51, 3rd Floor, Community Centre, Block A, Friends Colony East,
            New Friends Colony, New Delhi, Delhi 110065
          </a>
        </div>
        <div className="flex flex-col w-[68%] gap-4 h-full max-md:w-full">
          <p className="font-bold text-4xl max-sm:text-2xl">4.9 out of 5</p>
          <p className="flex gap-1 text-[#F79028] text-2xl max-sm:text-sm">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <div className="h-[1px] w-full bg-black max-md:hidden"></div>
          <Swiper
            slidesPerView={window.innerWidth < 760 ? 1 : 4}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="w-full h-64 max-md:32 max-sm:mt-8"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col">
                  <p className="font-bold text-lg">{review.author_name}</p>
                  <p className="opacity-40 text-sm">
                    {review.relative_time_description}
                  </p>
                  <p className="flex gap-1 text-[#F79028] text-md mt-2 max-sm:text-sm">
                    {[...Array(review.rating)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </p>
                  <p className="mt-4 opacity-60">{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LocationAndReviews;
