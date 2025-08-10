import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Draggable, ScrollTrigger);

const CelebritySlider = () => {
  const container = useRef(null);
  const slides = useRef([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slideWidth = () => {
    if (width < 640) return width * 0.7;
    if (width < 1024) return width * 0.4;
    return width * 0.25;
  };

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      const sw = slideWidth();
      const total = slides.current.length;
      const spacing = sw + 20;
      const bounds = { minX: -(total - 1) * spacing, maxX: 0 };

      const drag = Draggable.create(container.current, {
        type: "x",
        bounds,
        inertia: true,
        onDrag: update,
        onThrowUpdate: update,
      })[0];

      function update() {
        const x = gsap.getProperty(container.current, "x");
        slides.current.forEach((el, idx) => {
          const centerPos = idx * spacing + sw / 2 + x;
          const offset = centerPos - width / 2;
          const norm = offset / width;

          gsap.to(el, {
            rotationY: norm * 40,
            scale: 1 - Math.min(Math.abs(norm), 1) * 0.35,
            zIndex: total - Math.round(Math.abs(norm) * total),
            ease: "power3.out",
            duration: 0.5,
          });
        });
      }

      update();

      // optional snapping on release
      drag.addEventListener("throwcomplete", () => {
        const finalX = gsap.getProperty(container.current, "x");
        const idx = Math.round(-finalX / spacing);
        gsap.to(container.current, {
          x: -idx * spacing,
          duration: 0.6,
          ease: "power4.out",
          onUpdate: update,
        });
      });
    }, container);

    return () => ctx.revert();
  }, [width]);
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ];

  return (
    <div className="w-full overflow-hidden px-4 touch-pan-y">
      <div
        ref={container}
        className="flex"
        style={{ cursor: "grab", gap: "20px" }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => (slides.current[i] = el)}
            className="flex-shrink-0 rounded-xl shadow-xl"
            style={{
              width: slideWidth(),
              height: slideWidth() * 0.6,
              perspective: 1200,
              transformStyle: "preserve-3d",
              background: "#222",
            }}
          >
            <img
              src={src}
              alt={`slide-${i}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelebritySlider;
