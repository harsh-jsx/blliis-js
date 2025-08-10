import React from "react";

const featured = [
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*",
    name: "Maya Torres",
    linkName: "some link",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*",
    name: "Maya Torres",
    linkName: "some link",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*",
    name: "Maya Torres",
    linkName: "some link",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*",
    name: "Maya Torres",
    linkName: "some link",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*",
    name: "Maya Torres",
    linkName: "some link",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*",
    name: "Maya Torres",
    linkName: "some link",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*",
    name: "Maya Torres",
    linkName: "some link",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*",
    name: "Maya Torres",
    linkName: "some link",
  },
];

const MediaHighlight = () => {
  return (
    <div className="flex justify-center items-center mt-18">
      <div className="max-w-[1600px] flex-col w-full flex gap-4 max-sm:px-4">
        <h1
          className="text-4xl mt-4"
          style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
        >
          Social Media Highlights
        </h1>
        <div className="flex justify-between flex-wrap items-center gap-4 mt-8">
          <div className="w-[75%] max-sm:w-full flex flex-wrap justify-between gap-8">
            {featured.map((feature, index) => (
              <img
                src={feature.url}
                alt="adfadf"
                className="object-cover aspect-square w-[22%] max-sm:w-full"
              />
            ))}
          </div>
          <div className="w-[23%] max-sm:w-full flex flex-col gap-2 h-full overflow-hidden">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*"
              alt="dafadf"
              className="object-cover w-full h-[560px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaHighlight;
