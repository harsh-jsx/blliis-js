import React from "react";

const AboutJourneyCards = () => {
  return (
    <div className="flex justify-center items-start gap-16 py-12 bg-white">
      {/* Card 1 */}
      <div className="flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Mike Najmi"
          className="w-64 h-72 object-cover mb-3"
        />
        <div className="text-center mt-3">
          <span className="block text-lg font-semibold">Mike Najmi</span>
        </div>
      </div>
      {/* Card 2 */}
      <div className="flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Natasha Nefedov"
          className="w-64 h-72 object-cover mb-3"
        />
        <div className="text-center mt-3">
          <span className="block text-lg font-semibold">Natasha Nefedov</span>
        </div>
      </div>
      {/* Card 3 */}
      <div className="flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/men/65.jpg"
          alt="Sham"
          className="w-64 h-72 object-cover mb-3"
        />
        <div className="text-center mt-3">
          <span className="block text-lg font-semibold">Sham</span>
        </div>
      </div>
    </div>
  );
};

export default AboutJourneyCards;
