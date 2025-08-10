import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "This place is a tried-and-tested safe haven. The attention to care is amazing...",
    logo: "https://johansford.com/cdn/shop/files/1569.1433428864_180x.png?v=1639724720",
  },
  {
    text: "This place is a tried-and-tested safe haven. The attention to care is amazing...",
    logo: "https://johansford.com/cdn/shop/files/1569.1433428864_180x.png?v=1639724720",
  },
  {
    text: "This place is a tried-and-tested safe haven. The attention to care is amazing...",
    logo: "https://johansford.com/cdn/shop/files/1569.1433428864_180x.png?v=1639724720",
  },
  {
    text: "This place is a tried-and-tested safe haven. The attention to care is amazing...",
    logo: "https://johansford.com/cdn/shop/files/1569.1433428864_180x.png?v=1639724720",
  },
  {
    text: "This place is a tried-and-tested safe haven. The attention to care is amazing...",
    logo: "https://johansford.com/cdn/shop/files/1569.1433428864_180x.png?v=1639724720",
  },
  {
    text: "This place is a tried-and-tested safe haven. The attention to care is amazing...",
    logo: "https://johansford.com/cdn/shop/files/1569.1433428864_180x.png?v=1639724720",
  },
  {
    text: "This place is a tried-and-tested safe haven. The attention to care is amazing...",
    logo: "https://johansford.com/cdn/shop/files/1569.1433428864_180x.png?v=1639724720",
  },
  {
    text: "This place is a tried-and-tested safe haven. The attention to care is amazing...",
    logo: "https://johansford.com/cdn/shop/files/1569.1433428864_180x.png?v=1639724720",
  },
  {
    text: "This place is a tried-and-tested safe haven. The attention to care is amazing...",
    logo: "https://johansford.com/cdn/shop/files/1569.1433428864_180x.png?v=1639724720",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-100 py-16 mt-16">
      <h2 className="text-center text-2xl font-light mb-8">TESTIMONIALS</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={window.innerWidth < 760 ? 1 : 3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        className="w-[90%] mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-8 shadow-md rounded-lg h-full flex flex-col justify-center gap-4 items-center text-center transition-transform duration-300">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="icon icon-quote w-6"
                viewBox="0 0 41 35"
              >
                <path
                  d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"
                  fill="#000"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <p className="italic text-gray-700 mb-4">“{t.text}”</p>
              <img src={t.logo} alt="logo" className="h-8 object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
