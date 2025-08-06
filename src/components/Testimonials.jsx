import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
  {
    url: "https://static.wixstatic.com/media/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03a16_dfa9a57b0b854b91a1120281b149d5b1~mv2.jpg",
    name: "Someone's Name",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem hic sint possimus quibusdam distinctio? Ad dolorem sed, eos magnam possimus ullam nobis, nostrum eaque corrupti sequi dolores quae accusantium?",
    rating: 2,
  },
];

const Testimonials = () => {
  return (
    <div className="flex justify-center items-center w-full py-2 flex-col mt-8 pb-12 overflow-hidden relative">
      <div
        className="absolute left-0 top-0 z-10 h-full "
        style={{
          boxShadow:
            window.innerWidth < 700
              ? "0px 0px 100px 30px rgba(255, 255, 255, 1)"
              : "0px 0px 100px 150px rgba(255, 255, 255, 1)",
        }}
      ></div>
      <div
        className="absolute right-0 top-0 z-10 h-full"
        style={{
          boxShadow:
            window.innerWidth < 700
              ? "0px 0px 100px 30px rgba(255, 255, 255, 1)"
              : "0px 0px 100px 150px rgba(255, 255, 255, 1)",
        }}
      ></div>
      <div className="flex items-center w-[90%] h-full gap-16 max-md:gap-8 animate-scroll-two ">
        {testimonials.map((data, index) => (
          <div
            key={index}
            className="w-[600px] h-[300px] aspect-square flex flex-col gap-2"
          >
            <img
              src={data.url}
              alt="adfadf"
              className="w-full h-full object-cover"
            />
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold">{data.name}</h1>
              <p className="flex gap-1 text-[#F79028] text-md mt-2 max-sm:text-sm">
                {[...Array(data.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </p>
            </div>
            <p className="text-sm">{data.desciption.slice(0, 100)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
