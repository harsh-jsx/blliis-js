import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import Swiper core and required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// install Swiper modules

const CelebritySlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={window.innerWidth < 760 ? 2 : 5}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      className="mySwiper w-full mb-24"
      modules={[EffectCoverflow, Pagination]}
    >
      {[...Array(9)].map((image, index) => (
        <SwiperSlide key={index} className="w-64">
          <img
            src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}
            className="object-cover h-64 w-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CelebritySlider;
