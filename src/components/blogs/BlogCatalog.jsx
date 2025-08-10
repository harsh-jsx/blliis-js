import React from "react";

const blogs = [
  {
    url: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    type: "Desents",
    header: "The Art of Elegant Living",
    date: "April 16, 2024",
  },
  {
    url: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    type: "Desents",
    header: "The Art of Elegant Living",
    date: "April 16, 2024",
  },
  {
    url: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    type: "Desents",
    header: "The Art of Elegant Living",
    date: "April 16, 2024",
  },
  {
    url: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    type: "Desents",
    header: "The Art of Elegant Living",
    date: "April 16, 2024",
  },
  {
    url: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    type: "Desents",
    header: "The Art of Elegant Living",
    date: "April 16, 2024",
  },
  {
    url: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    type: "Desents",
    header: "The Art of Elegant Living",
    date: "April 16, 2024",
  },
];

const BlogCatalog = () => {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="max-w-[1600px] w-full flex-wrap max-sm:px-4 justify-between flex gap-14">
        {blogs.map((blog, index) => (
          <div
            className="w-[48%] flex flex-col gap-2 cursor-pointer max-md:w-full"
            key={index}
          >
            <img
              src={blog.url}
              alt="blog_image"
              className="w-full object-cover"
            />
            <p className="opacity-60 uppercase text-lg">{blog.type}</p>
            <h1
              className="text-4xl"
              style={{
                fontFamily: '"Libertinus Serif", serif',
                fontWeight: 500,
              }}
            >
              {blog.header}
            </h1>
            <p className="opacity-80 uppercase text-lg">{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCatalog;
