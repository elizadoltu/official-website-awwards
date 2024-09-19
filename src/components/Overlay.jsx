// Overlay.js
import React, { useEffect } from 'react';
import gsap from 'gsap';
import "../css/loader.css"

const Overlay = ({ onComplete }) => {
  useEffect(() => {
    gsap.from("h2 div", 1.5, {
      yPercent: 100,
      ease: "power4.inOut",
      stagger: 0.5,
    });

    const handleClick = () => {
      gsap.to("h2 div", 1.5, {
        yPercent: -100,
        ease: "power4.inOut",
        stagger: 0.5,
      });

      gsap.to(".overlay", 2, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        onComplete,
      });
    };

    document.querySelector('.overlay').addEventListener('click', handleClick);
    return () => {
      document.querySelector('.overlay').removeEventListener('click', handleClick);
    };
  }, [onComplete]);

  return (
    <div className="overlay">
      <div className="col">
        <h2><div>An portugese</div></h2>
        <h2><div>visual photographer</div></h2>
        <h2><div>based in spain</div></h2>
      </div>
      <div className="col">
        <h2><div><span>click</span> anywhere to continue</div></h2>
      </div>
    </div>
  );
};

export default Overlay;
