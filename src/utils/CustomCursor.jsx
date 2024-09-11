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

    const hoverTargets = document.querySelectorAll("a, button, .hoverable, h1, p");

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        gsap.to(cursorRef.current, {
          scale: 1.8,
          backgroundColor: "#FF0000",
          duration: 0.2,
        });

        cursorRef.current.style.mixBlendMode = "exclusion";
      });

      target.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "#000",
          duration: 0.2,
        });

        cursorRef.current.style.mixBlendMode = "initial";
      });
    });
    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", () => {});
        target.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
    ref={cursorRef}
    className="w-8 h-8 rounded-full bg-black fixed top-0 left-0 pointer-events-none z-50"
  ></div>
  )
}

export default CustomCursor;