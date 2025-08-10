import React from "react";

const blogs = [
  {
    header: "Estimating the Unestimatable: Project Planning for Innovation",
    description:
      "Traditional project management assumes we know what we're building. Innovation projects laugh at this assumption. We need to plan the unplannable while keeping stakeholders confident and teams motivated. It's a delicate balance between structure and flexibility.",
    url: "https://blliisbyravissant.in/wp-content/uploads/2024/07/SPA.jpg.webp",
    author: "Blliis",
    authorPFP:
      "https://www.fundamental.bg/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwjpa3i0907yp%2F6QiaLX8KFVbPyOGzsxOaKt%2F53ad977cfb1185d27f519e7c6cd48ce9%2FIvan.jpeg&w=48&q=75",
    dateandTime: `${new Date().toLocaleString()}`,
  },
  {
    header: "Estimating the Unestimatable: Project Planning for Innovation",
    description:
      "Traditional project management assumes we know what we're building. Innovation projects laugh at this assumption. We need to plan the unplannable while keeping stakeholders confident and teams motivated. It's a delicate balance between structure and flexibility.",
    url: "https://blliisbyravissant.in/wp-content/uploads/2024/07/SPA.jpg.webp",
    author: "Blliis",
    authorPFP:
      "https://www.fundamental.bg/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwjpa3i0907yp%2F6QiaLX8KFVbPyOGzsxOaKt%2F53ad977cfb1185d27f519e7c6cd48ce9%2FIvan.jpeg&w=48&q=75",
    dateandTime: `${new Date().toLocaleString()}`,
  },
  {
    header: "Estimating the Unestimatable: Project Planning for Innovation",
    description:
      "Traditional project management assumes we know what we're building. Innovation projects laugh at this assumption. We need to plan the unplannable while keeping stakeholders confident and teams motivated. It's a delicate balance between structure and flexibility.",
    url: "https://blliisbyravissant.in/wp-content/uploads/2024/07/SPA.jpg.webp",
    author: "Blliis",
    authorPFP:
      "https://www.fundamental.bg/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwjpa3i0907yp%2F6QiaLX8KFVbPyOGzsxOaKt%2F53ad977cfb1185d27f519e7c6cd48ce9%2FIvan.jpeg&w=48&q=75",
    dateandTime: `${new Date().toLocaleString()}`,
  },
];

const HomeBlog = () => {
  return (
    <div
      className="flex justify-center items-center w-full py-8 pb-24 flex-col overflow-hidden"
      id="home-blog-container"
    >
      <div
        className="flex justify-between flex-wrap items-center w-[90%] h-full max-md:flex-col max-md:gap-8"
        id="inner-home-blog-container"
      >
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="w-full max-w-[500px] p-4 rounded-lg flex flex-col gap-4 cursor-pointer"
            style={{ boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.2)" }}
          >
            <img
              src={blog.url}
              alt="adfadf"
              className="w-full object-cover h-[300px] rounded-lg"
            />
            <h1 className="text-2xl font-bold">{blog.header}</h1>
            <p className="text-[14px]">{blog.description.slice(0, 151)}...</p>
            <div className="flex justify-between w-full items-center mt-4">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={blog.authorPFP}
                  alt="adfadf"
                  className="rounded-full w-10 h-10"
                />
                <p className="text-2xl ">{blog.author}</p>
              </div>
              <p className="text-[14px] font-bold">{blog.dateandTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
