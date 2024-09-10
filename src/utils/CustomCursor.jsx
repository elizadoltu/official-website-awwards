import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.1,
      });
    });

    const hoverTargets = document.querySelectorAll("a, button, .hoverable");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          backgroundColor: "#ff0000",
          duration: 0.2,
        });
      });

      target.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "#000",
          duration: 0.2,
        });
      });
    });
  }, []);

  return (
    <div ref={cursorRef}
    className="w-8 h-8 rounded-full bg-black fixed top-0 left-0 pointer-events-none z-50 mix-blend-exclusion"
    style={{ mixBlendMode: "exclusion" }}>
    </div>
  )
};

export default CustomCursor;
