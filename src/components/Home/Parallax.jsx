import React from "react";

const Parallax = () => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      className="h-[400px] max-sm:h-[200px]"
    >
      <div
        style={{
          backgroundImage:
            'url("https://coiffure.vamtam.com/wp-content/uploads/2023/10/GettyImages-1454817345.jpg")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          filter: "brightness(0.7)",
        }}
      />
    </div>
  );
};

export default Parallax;
