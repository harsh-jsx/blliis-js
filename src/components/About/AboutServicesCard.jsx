import React from "react";
import { FaLeaf, FaGlobe, FaCoffee, FaShoppingBag } from "react-icons/fa";

const AboutServicesCard = () => {
  // Import needed icons from react-icons

  return (
    <div className="flex flex-wrap justify-center gap-8 py-8 px-4">
      {/* Avant-Garde Decor */}
      <div className="flex-1 min-w-[220px] max-w-[260px] text-center">
        <div className="flex justify-center mb-2">
          <FaLeaf size={40} className="text-[#bfa77a]" />
        </div>
        <h3 className="mt-4 mb-2 text-lg font-semibold">Avant-Garde Decor</h3>
        <p className="text-[0.95rem] text-gray-700">
          Italian marble tiles, textiles, accent walls & furniture
        </p>
      </div>

      {/* International Experts */}
      <div className="flex-1 min-w-[220px] max-w-[260px] text-center">
        <div className="flex justify-center mb-2">
          <FaGlobe size={40} className="text-[#bfa77a]" />
        </div>
        <h3 className="mt-4 mb-2 text-lg font-semibold">
          International Experts
        </h3>
        <p className="text-[0.95rem] text-gray-700">
          Stylists from Europe & technological specialists
        </p>
      </div>

      {/* Salon + Spa + Café */}
      <div className="flex-1 min-w-[220px] max-w-[260px] text-center">
        <div className="flex justify-center mb-2">
          <FaCoffee size={40} className="text-[#bfa77a]" />
        </div>
        <h3 className="mt-4 mb-2 text-lg font-semibold">Salon + Spa + Café</h3>
        <p className="text-[0.95rem] text-gray-700">
          Beauty, pampering, lunch, games + comfy
        </p>
      </div>

      {/* Retail Experience */}
      <div className="flex-1 min-w-[220px] max-w-[260px] text-center">
        <div className="flex justify-center mb-2">
          <FaShoppingBag size={40} className="text-[#bfa77a]" />
        </div>
        <h3 className="mt-4 mb-2 text-lg font-semibold">Retail Experience</h3>
        <p className="text-[0.95rem] text-gray-700">
          Wellness, couture and chic accessories
        </p>
      </div>
    </div>
  );
};

export default AboutServicesCard;
