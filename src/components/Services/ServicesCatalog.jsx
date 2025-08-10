import React, { useState } from "react";
import artistThree from "../../assets/artistThree.mp4";
import { FaChevronUp, FaFemale, FaMale, FaStar } from "react-icons/fa";

const servicesFiler = [
  {
    label: "Skin",
    value: "skin",
  },
  {
    label: "Hairs",
    value: "hairs",
  },
  {
    label: "Nails",
    value: "nails",
  },
  {
    label: "Wax",
    value: "wax",
  },
  {
    label: "Make Up",
    value: "make-up",
  },
  {
    label: "Spa",
    value: "spa",
  },
];

const genderFilter = [
  {
    label: `Men`,
    icon: <FaMale />,
    value: "men",
  },
  {
    label: `Women`,
    icon: <FaFemale />,
    value: "women",
  },
];

const services = [
  {
    url: artistThree,
    name: "All skin type treatments",
    price: 8400,
    type: "skin",
    description:
      "A customized treatment with deep cleansing, gentle exfoliation, a hydrating masque, and a relaxing massage to leave your skin radiant and refreshed. Tailored Dermalogica serums and botanical blends enhance every step for maximum results.",
    rating: 4,
    reviews: 75,
  },
  {
    url: artistThree,
    name: "Pro Brightening Skin Treatment",
    price: 8900,
    type: "skin",
    description:
      "Packed with silky, peptide-rich formulas, this treatment targets uneven skin tone and pigmentation, leaving your skin brighter, softer, and visibly more even with reduced signs of premature aging. ",
    rating: 4,
    reviews: 75,
  },
  {
    url: artistThree,
    name: "Antiaging",
    price: 9999,
    type: "skin",
    description:
      "Warm stones are placed on the body to ease muscle stiffness and promote relaxation.",
    rating: 4,
    reviews: 74,
  },
  {
    url: artistThree,
    name: "Sensitive Skin Treatment ",
    price: 9999,
    type: "skin",
    description:
      "Warm stones are placed on the body to ease muscle stiffness and promote relaxation.",
    rating: 4,
    reviews: 74,
  },
  {
    url: artistThree,
    name: "Dermafrac",
    price: 9999,
    type: "skin",
    description:
      "Warm stones are placed on the body to ease muscle stiffness and promote relaxation.",
    rating: 4,
    reviews: 74,
  },
  {
    url: artistThree,
    name: "Express Brightening (Clean up)",
    price: 9999,
    type: "skin",
    description:
      "Warm stones are placed on the body to ease muscle stiffness and promote relaxation.",
    rating: 4,
    reviews: 74,
  },
  {
    url: artistThree,
    name: "Sensitive Skin Treatment",
    price: 9999,
    type: "skin",
    description:
      "Warm stones are placed on the body to ease muscle stiffness and promote relaxation.",
    rating: 4,
    reviews: 74,
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ServicesCatalog = () => {
  const [activeFilter, setactiveFilter] = useState(0);
  const [activeGener, setactiveGener] = useState(0);
  const [isReadMoreToggled, setisReadMoreToggled] = useState([]);

  console.log(isReadMoreToggled);

  return (
    <div className="flex justify-center items-center">
      <div
        className="flex flex-col w-full max-w-[1500px] max-md:px-4"
        id="#filter"
      >
        <h1
          className="mt-8 font-bold text-6xl max-md:text-center"
          style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
        >
          Services
        </h1>
        <div className="flex flex-col">
          <div className="flex justify-center overflow-x-auto gap-4 py-8">
            {genderFilter.map((service, index) => (
              <button
                key={index}
                className="px-8 py-2 flex justify-center items-center gap-2 cursor-pointer rounded-sm transition-all duration-300"
                onClick={() => setactiveGener(index)}
                style={
                  activeGener === index
                    ? {
                        backgroundColor: "#000",
                        color: "#fff",
                      }
                    : {
                        backgroundColor: "transparent",
                        color: "#000",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                      }
                }
              >
                {service.icon}
                {service.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 py-8 justify-center">
            {servicesFiler.map((service, index) => (
              <button
                key={index}
                className="px-8 py-2 cursor-pointer rounded-sm transition-all duration-300"
                onClick={() => setactiveFilter(index)}
                style={
                  activeFilter === index
                    ? {
                        backgroundColor: "#000",
                        color: "#fff",
                      }
                    : {
                        backgroundColor: "transparent",
                        color: "#000",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                      }
                }
              >
                {service.label}
              </button>
            ))}
          </div>
        </div>
        <h1
          className="mt-8 text-center font-bold text-6xl"
          style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
        >
          Skin
        </h1>
        <div className="flex justify-center mt-2 ">
          <p className="text-center mt-4 text-lg text-gray-700 w-[60%] max-sm:w-full max-sm:text-sm">
            Our skin services are designed to rejuvenate, cleanse, and nourish
            your skin, helping you achieve a healthy and radiant complexion.
            Experience professional treatments tailored to your unique needs.
          </p>
        </div>
        <p className="my-8 text-3xl bg-black text-white px-2 py-2">
          Dermologica
        </p>
        <div className="flex justify-between  w-full h-full relative flex-wrap">
          <div className="w-full max-w-[700px] px-4 flex gap-4 flex-col">
            {services.map((service, index) => {
              if (services.length / 2 < index + 1) return;
              const viewmore = false;
              return (
                <div
                  className="w-full flex justify-between flex-col gap-2 pb-2"
                  style={{ borderBottom: "1px solid #000" }}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold max-sm:text-[15px] max-sm:w-42">
                      {service.name}
                    </p>
                    <p className="text-lg font-bold  max-sm:text-[15px]">
                      ₹{service.price}{" "}
                      <span className="text-[10px] font-normal italic">
                        onwards
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="w-64 text-[14px] max-sm:text-[12px] max-sm:w-42">
                      {isReadMoreToggled.includes(index)
                        ? service.description
                        : service.description.slice(0, 60)}
                      <span
                        className="underline cursor-pointer"
                        onClick={() => {
                          setisReadMoreToggled(
                            (prev) =>
                              prev.includes(index)
                                ? prev.filter((i) => i !== index) // remove if already toggled
                                : [...prev, index] // add if not toggled
                          );
                        }}
                      >
                        {isReadMoreToggled.includes(index)
                          ? "... Read Less"
                          : "... Read More"}
                      </span>
                    </p>
                    <p>{service.reviews} Minutes</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full max-w-[700px] px-4 flex gap-4 flex-col relative top-0">
            {services.map((service, index) => {
              if (services.length / 2 > index) return;
              return (
                <div
                  className="w-full flex justify-between flex-col gap-2 pb-2"
                  style={{ borderBottom: "1px solid #000" }}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold max-sm:text-[15px] max-sm:w-42">
                      {service.name}
                    </p>
                    <p className="text-lg font-bold  max-sm:text-[15px]">
                      ₹{service.price}{" "}
                      <span className="text-[10px] font-normal italic">
                        onwards
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="w-64 text-[14px] max-sm:text-[12px] max-sm:w-42">
                      {isReadMoreToggled.includes(index)
                        ? service.description
                        : service.description.slice(0, 60)}
                      <span
                        className="underline cursor-pointer"
                        onClick={() => {
                          setisReadMoreToggled(
                            (prev) =>
                              prev.includes(index)
                                ? prev.filter((i) => i !== index) // remove if already toggled
                                : [...prev, index] // add if not toggled
                          );
                        }}
                      >
                        {isReadMoreToggled.includes(index)
                          ? "... Read Less"
                          : "... Read More"}
                      </span>
                    </p>
                    <p>{service.reviews} Minutes</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h1
          className="mt-16 text-center font-bold text-6xl"
          style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
        >
          Hairs
        </h1>
        <div className="flex justify-center mt-2 ">
          <p className="text-center mt-4 text-lg text-gray-700 w-[60%] max-sm:w-full">
            Our skin services are designed to rejuvenate, cleanse, and nourish
            your skin, helping you achieve a healthy and radiant complexion.
            Experience professional treatments tailored to your unique needs.
          </p>
        </div>
        <p className="my-8 text-4xl">Haircut</p>
        <div className="flex justify-between  w-full h-full relative flex-wrap">
          <div className="w-full max-w-[700px] px-4 flex gap-4 flex-col">
            {services.map((service, index) => {
              if (services.length / 2 < index + 1) return;
              return (
                <div
                  className="w-full flex justify-between flex-col gap-2 pb-2"
                  style={{ borderBottom: "1px solid #000" }}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold max-sm:text-[15px] max-sm:w-42">
                      {service.name}
                    </p>
                    <p className="text-lg font-bold  max-sm:text-[15px]">
                      ₹{service.price}{" "}
                      <span className="text-[10px] font-normal italic">
                        onwards
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="w-64 text-[14px] max-sm:text-[12px] max-sm:w-42">
                      {isReadMoreToggled.includes(index)
                        ? service.description
                        : service.description.slice(0, 60)}
                      <span
                        className="underline cursor-pointer"
                        onClick={() => {
                          setisReadMoreToggled(
                            (prev) =>
                              prev.includes(index)
                                ? prev.filter((i) => i !== index) // remove if already toggled
                                : [...prev, index] // add if not toggled
                          );
                        }}
                      >
                        {isReadMoreToggled.includes(index)
                          ? "... Read Less"
                          : "... Read More"}
                      </span>
                    </p>
                    <p>{service.reviews} Minutes</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full max-w-[700px] px-4 flex gap-4 flex-col relative top-0">
            {services.map((service, index) => {
              if (services.length / 2 > index) return;
              return (
                <div
                  className="w-full flex justify-between flex-col gap-2 pb-2"
                  style={{ borderBottom: "1px solid #000" }}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold max-sm:text-[15px] max-sm:w-42">
                      {service.name}
                    </p>
                    <p className="text-lg font-bold  max-sm:text-[15px]">
                      ₹{service.price}{" "}
                      <span className="text-[10px] font-normal italic">
                        onwards
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="w-64 text-[14px] max-sm:text-[12px] max-sm:w-42">
                      {isReadMoreToggled.includes(index)
                        ? service.description
                        : service.description.slice(0, 60)}
                      <span
                        className="underline cursor-pointer"
                        onClick={() => {
                          setisReadMoreToggled(
                            (prev) =>
                              prev.includes(index)
                                ? prev.filter((i) => i !== index) // remove if already toggled
                                : [...prev, index] // add if not toggled
                          );
                        }}
                      >
                        {isReadMoreToggled.includes(index)
                          ? "... Read Less"
                          : "... Read More"}
                      </span>
                    </p>
                    <p>{service.reviews} Minutes</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        className="fixed bottom-15 right-15 p-4 rounded-full bg-black text-white cursor-pointer max-sm:bottom-5 max-sm:right-5"
        onClick={scrollToTop}
      >
        <FaChevronUp />
      </button>
    </div>
  );
};

export default ServicesCatalog;
