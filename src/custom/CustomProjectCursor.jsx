import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomProjectCursor = () => {
  const cursorRefProject = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursorRefProject.current, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.1,
      });
    });
 const hoverTargets = document.querySelectorAll(".h2-animation");
   

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        gsap.to(cursorRefProject.current, {
          scale: 1.8,
          backgroundColor: "#FF0000",
          duration: 0.2,
        });
      });

      target.addEventListener("mouseleave", () => {
        gsap.to(cursorRefProject.current, {
          scale: 1,
          backgroundColor: "#000",
          duration: 0.2,
        });
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
    ref={cursorRefProject}
    className="w-8 h-8 bg-black fixed top-0 left-0 pointer-events-none z-50"
  > <p className="text-xs text-bg-color">view</p></div>
  )
};

export default CustomProjectCursor;
