import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaX } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

  const ToggleNavbar = () => {
    if (isNavOpen) {
      setisNavOpen(false);
      gsap.to("#mobile-nav-menu", {
        duration: 1,
        height: 0,
        margin: 0,
        ease: "power2.Out",
      });
      gsap.to("#mobile-nav-cta", {
        duration: 1,
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        ease: "power4.inOut",
      });
    } else {
      setisNavOpen(true);
      gsap.to("#mobile-nav-menu", {
        duration: 0.5,
        height: "auto",
        margin: "20px 0",
        ease: "power2.Out",
      });
      gsap.to("#mobile-nav-cta", {
        duration: 0.5,
        height: "48px",
        marginTop: "56px",
        marginBottom: "32px",
        ease: "power2.Out",
      });
    }
  };

  useGSAP(() => {
    gsap.from("#navbar-container", {
      y: -200,
      opacity: 0,
      ease: "power2.inOut",
      duration: 1.5,
      delay: 1,
    });
  });

  return (
    <div
      className="w-full flex justify-center items-center py-6 max-sm:py-2 fixed top-0 px-4 z-[1000000]"
      id="navbar-container"
    >
      <div
        className=" transition-all ease duration-1000 bg-white flex max-md:flex-col justify-between items-center max-w-[1700px] w-full px-4 rounded-[50px] overflow-hidden"
        id="navbar"
        style={{ boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.2)" }}
      >
        <button className="cursor-pointer button max-md:hidden" id="nav-cta">
          <p>Book now</p>
        </button>

        <a href="/" className="mr-[-180px] max-md:hidden">
          <img
            src={Logo}
            alt="logo"
            className="w-18 object-cover"
            id="nav-logo"
          />
        </a>

        <div className="flex gap-6 items-center max-md:hidden" id="nav-menu">
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/media">Media</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="justify-between hidden max-md:flex w-full items-center">
          <a href="/" className="">
            <img src={Logo} alt="logo" className="w-18 object-cover" />
          </a>
          <p className="text-xl" onClick={ToggleNavbar}>
            {isNavOpen ? <FaX /> : <FaBars />}
          </p>
        </div>

        <div
          className="hidden max-md:flex w-full flex-col gap-2 pt-0 pl-2 pb-0 overflow-hidden h-0"
          id="mobile-nav-menu"
        >
          <Link to="/services" className="text-2xl">
            Services
          </Link>
          <Link to="/blog" className="text-2xl">
            Blog
          </Link>
          <Link to="/media" className="text-2xl">
            Media
          </Link>
          <Link to="/about" className="text-2xl">
            About Us
          </Link>
          <Link to="/contact" className="text-2xl">
            Contact
          </Link>
        </div>

        <button
          className="cursor-pointer button hidden max-md:flex mt-0 mb-0 w-full h-0"
          id="mobile-nav-cta"
        >
          <p>Book now</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
