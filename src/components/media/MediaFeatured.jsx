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
];

const MediaFeatured = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1600px] flex-col w-full flex gap-4 max-sm:px-4">
        <h1
          className="text-4xl mt-4"
          style={{ fontFamily: '"Libertinus Serif", serif', fontWeight: 400 }}
        >
          Featured Articles
        </h1>
        <div className="flex justify-between flex-wrap items-center gap-4 mt-8">
          {featured.map((feature, index) => (
            <div
              key={index}
              className="w-[22%] max-sm:w-full flex flex-col gap-2"
            >
              <img src={feature.url} alt="adfadf" />
              <p className="text-2xl">{feature.name}</p>
              <a className="underline">{feature.linkName}</a>
            </div>
          ))}
          <div className="w-[22%] max-sm:w-full flex flex-col gap-2 ">
            <h1
              className="text-4xl"
              style={{
                fontFamily: '"Libertinus Serif", serif',
                fontWeight: 400,
              }}
            >
              Video Coverage <br className="max-sm:hidden" /> & Interviews
            </h1>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=640:*"
              alt="dafadf"
              className="object-cover w-full h-64"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              suscipit facere nisi voluptatum dicta corporis aliquid?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaFeatured;
