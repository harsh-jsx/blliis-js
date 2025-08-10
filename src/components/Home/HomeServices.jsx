import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import sliderone from "../../assets/sliderone.jpg";
import slidertwo from "../../assets/slidertwo.jpg";
import sliderthree from "../../assets/sliderthree.jpg";
import sliderfour from "../../assets/sliderfour.jpg";
import { useNavigate } from "react-router-dom";

const spaServices = [
  {
    name: "Swedish Massage",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    description:
      "Relaxing full-body massage using gentle, long strokes to improve circulation and relieve tension.",
  },
  {
    name: "Facial Treatment",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description:
      "Deep cleansing and rejuvenating facial to refresh and hydrate your skin.",
  },
  {
    name: "Hot Stone Therapy",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    description:
      "Warm stones are placed on the body to ease muscle stiffness and promote relaxation.",
  },
  {
    name: "Aromatherapy",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description:
      "Massage with essential oils to enhance mood and relieve stress.",
  },
  {
    name: "Body Scrub",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description:
      "Exfoliating treatment to remove dead skin cells and leave your skin smooth.",
  },
  {
    name: "Manicure & Pedicure",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description:
      "Professional nail care for hands and feet, including shaping and polishing.",
  },
  {
    name: "Swedish Massage",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    description:
      "Relaxing full-body massage using gentle, long strokes to improve circulation and relieve tension.",
  },
  {
    name: "Facial Treatment",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description:
      "Deep cleansing and rejuvenating facial to refresh and hydrate your skin.",
  },
  {
    name: "Hot Stone Therapy",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    description:
      "Warm stones are placed on the body to ease muscle stiffness and promote relaxation.",
  },
  {
    name: "Aromatherapy",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description:
      "Massage with essential oils to enhance mood and relieve stress.",
  },
  {
    name: "Body Scrub",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description:
      "Exfoliating treatment to remove dead skin cells and leave your skin smooth.",
  },
  {
    name: "Manicure & Pedicure",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description:
      "Professional nail care for hands and feet, including shaping and polishing.",
  },
  {
    name: "Swedish Massage",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    description:
      "Relaxing full-body massage using gentle, long strokes to improve circulation and relieve tension.",
  },
  {
    name: "Facial Treatment",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description:
      "Deep cleansing and rejuvenating facial to refresh and hydrate your skin.",
  },
  {
    name: "Hot Stone Therapy",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    description:
      "Warm stones are placed on the body to ease muscle stiffness and promote relaxation.",
  },
  {
    name: "Aromatherapy",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description:
      "Massage with essential oils to enhance mood and relieve stress.",
  },
  {
    name: "Body Scrub",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description:
      "Exfoliating treatment to remove dead skin cells and leave your skin smooth.",
  },
  {
    name: "Manicure & Pedicure",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description:
      "Professional nail care for hands and feet, including shaping and polishing.",
  },
];

const HomeServices = () => {
  let navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center gap-4 w-full px-4 max-w-[1700px] mx-auto">
        <Swiper
          slidesPerView={window.innerWidth < 600 ? 1 : 6}
          centeredSlides={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper  h-[500px] "
        >
          {spaServices.map((service, index) => (
            <SwiperSlide className="flex flex-col relative h-full " key={index}>
              <img
                src={service.image}
                alt="service-img"
                className="w-full h-64 object-cover"
              />
              <h1 className="text-2xl font-bold mt-4">{service.name}</h1>
              <p className="text-[14px] opacity-60 mt-2">
                {service.description}
              </p>
              <button
                className="absolute bottom-0 flex justify-center items-center px-12 py-3 bg-black text-[14px] text-white w-full font-bold cursor-pointer"
                style={{
                  fontFamily: '"Libertinus Serif", serif',
                  fontWeight: 400,
                }}
              >
                Book Now
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="flex justify-center items-center px-12 py-3 bg-black text-[14px] mt-8 text-white font-bold cursor-pointer"
          style={{
            fontFamily: '"Libertinus Serif", serif',
            fontWeight: 400,
          }}
          onClick={() => navigate("/services")}
        >
          View All Services
        </button>
      </div>
    </div>
  );
};

export default HomeServices;
