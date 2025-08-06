import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="w-full items-center justify-center flex mt-32"
      style={{ boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="w-full max-w-[1200px] flex flex-col gap-2 py-16 max-md:px-4 flex-wrap">
        <div className="flex justify-between flex-wrap w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Links</h1>
            <div className="flex flex-col gap-4 mt-8">
              <p className="cursor-pointer">Home</p>
              <p className="cursor-pointer">Services</p>
              <p className="cursor-pointer">Blog</p>
              <p className="cursor-pointer">Media</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Contacts</h1>
            <div className="flex flex-col gap-4 mt-4 items-end">
              <div className="flex gap-8">
                <FaInstagram fontSize={25} />
                <FaFacebook fontSize={25} />
                <FaXTwitter fontSize={25} />
              </div>
              <h1 className="text-lg">+11 34987934</h1>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black my-4"></div>
        <div className="flex justify-between flex-wrap max-md:gap-8">
          <h1 className="w-84">
            50-51, 3rd Floor, Community Centre, Block A, Friends Colony East,
            New Friends Colony, New Delhi, Delhi 110065
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.177208636628!2d77.26458307630354!3d28.561325387309136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce394ee051687%3A0x92f14ffebd611ac9!2sBlliis%20by%20Ravissant!5e1!3m2!1sen!2sin!4v1754444036878!5m2!1sen!2sin"
            className="border-none max-w-[600px] w-full h-84"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full h-[1px] bg-black my-4"></div>
        <div className="flex justify-between items-center flex-wrap max-md:gap-4">
          <p>©2024 Blliisbyravissant. All Rights reserved</p>
          <p>Made with ❤️ by Flision Studio</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
