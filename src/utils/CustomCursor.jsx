import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isH2Animation, setIsH2Animation] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - (isH2Animation ? 50 : 16),
        y: e.clientY - (isH2Animation ? 50 : 16),
        duration: 0.1,
      });
    };

    const defaultHoverTargets = document.querySelectorAll("a, button, .hoverable, h1, p");
    const h2AnimationTargets = document.querySelectorAll(".h2-animation");

    const handleMouseEnterDefault = () => {
      gsap.to(cursorRef.current, {
        scale: 1.3,
        backgroundColor: "#FF0000", // Default hover color
        duration: 0.2,
      });
      cursorRef.current.style.mixBlendMode = "exclusion";
    };

    const handleMouseLeaveDefault = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "#000", // Default color
        duration: 0.2,
      });
      cursorRef.current.style.mixBlendMode = "initial";
    };

    const handleMouseEnterH2Animation = () => {
      setIsH2Animation(true);
      gsap.to(cursorRef.current, {
        scale: 1.5,
        backgroundColor: "#00FF00", // Custom color for .h2-animation elements
        duration: 0.2,
      });
      cursorRef.current.style.mixBlendMode = "exclusion";
    };

    const handleMouseLeaveH2Animation = () => {
      setIsH2Animation(false);
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "#000", // Default color
        duration: 0.2,
      });
      cursorRef.current.style.mixBlendMode = "initial";
    };

    defaultHoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", handleMouseEnterDefault);
      target.addEventListener("mouseleave", handleMouseLeaveDefault);
    });

    h2AnimationTargets.forEach((target) => {
      target.addEventListener("mouseenter", handleMouseEnterH2Animation);
      target.addEventListener("mouseleave", handleMouseLeaveH2Animation);
    });

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      defaultHoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnterDefault);
        target.removeEventListener("mouseleave", handleMouseLeaveDefault);
      });
      h2AnimationTargets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnterH2Animation);
        target.removeEventListener("mouseleave", handleMouseLeaveH2Animation);
      });
    };
  }, [isH2Animation]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-50 ${isH2Animation ? 'w-16 h-16 bg-green-500 flex justify-center items-center' : 'w-8 h-8 bg-black rounded-full'}`}
    >
      {isH2Animation ? (
        <p className="text-xs text-white font-urbanist font-black">VIEW</p>
      ) : null}
    </div>
  );
};

export default CustomCursor;
