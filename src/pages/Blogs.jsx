import React from "react";
import BlogHero from "../components/blogs/BlogHero";
import BlogFilters from "../components/blogs/BlogFilters";
import BlogCatalog from "../components/blogs/BlogCatalog";

const Blogs = () => {
  return (
    <div>
      <BlogHero />
      <BlogFilters />
      <BlogCatalog />
    </div>
  );
};

export default Blogs;
