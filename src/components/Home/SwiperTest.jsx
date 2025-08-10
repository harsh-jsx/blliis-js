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

const imgs = [
  { url: sliderone },
  { url: slidertwo },
  { url: sliderthree },
  { url: sliderfour },
];

const SwiperTest = () => {
  return (
    <Swiper
      slidesPerView={window.innerWidth < 600 ? 2 : 6}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper my-42 max-sm:my-22"
    >
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        <img
          src={sliderone}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        {" "}
        <img
          src={slidertwo}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        {" "}
        <img
          src={sliderthree}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        {" "}
        <img
          src={sliderfour}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        {" "}
        <img
          src={sliderone}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        {" "}
        <img
          src={slidertwo}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        {" "}
        <img
          src={sliderthree}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        {" "}
        <img
          src={sliderfour}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        {" "}
        <img
          src={sliderone}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        {" "}
        <img
          src={slidertwo}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        {" "}
        <img
          src={sliderthree}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
      <SwiperSlide key={213} className="w-12 h-12 max-sm:h-24 max-sm:w-24">
        {" "}
        <img
          src={sliderfour}
          alt="fdafad"
          className="w-full h-full aspect-square object-contain"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperTest;
