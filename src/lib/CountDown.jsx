import React from "react";
import gsap from "gsap";

const CountDown = () => {
  gsap.to(".digit-wrapper", {
    y: "-=500", // 10 digits × 50px height
    duration: 2,
    ease: "power2.inOut",
    repeat: -1, // loop forever
    modifiers: {
      y: gsap.utils.unitize((y) => parseFloat(y) % 500), // wrap around
    },
  });

  return (
    <div class="counter">
      <div class="digit-wrapper">
        <div class="digit">0</div>
        <div class="digit">1</div>
        <div class="digit">2</div>
        <div class="digit">3</div>
        <div class="digit">4</div>
        <div class="digit">5</div>
        <div class="digit">6</div>
        <div class="digit">7</div>
        <div class="digit">8</div>
        <div class="digit">9</div>
      </div>
    </div>
  );
};

export default CountDown;
