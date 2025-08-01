import React, { useState, createContext, useContext, forwardRef } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CardHoverRevealContext = createContext();

const useCardHoverRevealContext = () => {
  const context = useContext(CardHoverRevealContext);
  if (!context) throw new Error("Must be used within a CardHoverReveal");
  return context;
};

export const CardHoverReveal = forwardRef(({ className, ...props }, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <CardHoverRevealContext.Provider value={{ isHovered, setIsHovered }}>
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      />
    </CardHoverRevealContext.Provider>
  );
});

export const CardHoverRevealMain = forwardRef(
  ({ className, style, ...props }, ref) => {
    const { isHovered } = useCardHoverRevealContext();
    const scale = isHovered ? 1.05 : 1;
    return (
      <div
        ref={ref}
        className={cn("size-full transition-transform duration-300", className)}
        style={{ transform: `scale(${scale})`, ...style }}
        {...props}
      />
    );
  }
);

export const CardHoverRevealContent = forwardRef(
  ({ className, style, ...props }, ref) => {
    const { isHovered } = useCardHoverRevealContext();
    return (
      <div
        ref={ref}
        className={cn(
          "absolute inset-[auto_1.5rem_1.5rem] p-6 backdrop-blur-lg transition-all duration-500 ease-in-out",
          className
        )}
        style={{
          translate: isHovered ? "0%" : "0% 120%",
          opacity: isHovered ? 1 : 0,
          ...style,
        }}
        {...props}
      />
    );
  }
);
