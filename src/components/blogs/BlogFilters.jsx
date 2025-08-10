import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const blogFilters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Lifestyle",
    value: "Lifestyle",
  },
  {
    label: "Interior Design",
    value: "InteriorDesign",
  },
  {
    label: "Decor",
    value: "decor",
  },
  {
    label: "Inspiraition",
    value: "Inspiraition",
  },
];

const BlogFilters = () => {
  const [activeFilter, setactiveFilter] = useState(0);

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1600px] w-full flex gap-4 max-sm:px-4">
        <div className="flex justify-between gap-4 py-8 w-full max-sm:flex-col-reverse">
          <div className="flex gap-4 flex-wrap max-md:justify-center">
            {blogFilters.map((service, index) => (
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
          <TextField
            label="Search"
            className="w-full max-w-[400px]"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;
