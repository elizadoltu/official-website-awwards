// Preloader.js
import React, { useEffect } from "react";
import gsap from "gsap";
import "../css/loader.css";
import png1 from '../images/1.png';
import png2 from '../images/2.png';
import png3 from '../images/3.png';
import png4 from '../images/4.png';
import png5 from '../images/5.png';
import png6 from '../images/6.png';
import png7 from '../images/7.png';

const Preloader = ({ onAnimationComplete }) => {
  useEffect(() => {
    gsap.fromTo(".overlay", 
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        duration: 1,
      }
    );

    gsap.fromTo("h2 div", {
      yPercent: 100,
    }, {
      yPercent: -100,
      ease: "power4.inOut",
      stagger: { amount: 0.5 },
    });

    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", () => {
      gsap.to("h2 div", {
        yPercent: -100,
        ease: "power4.inOut",
        stagger: { amount: 0.5 },
      });
      gsap.to(".overlay", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
      });

      gsap.to(".img", {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
        ease: "power4.inOut",
        stagger: { amount: 1.5 },
        onComplete: onAnimationComplete, // Trigger when the animation completes
      });

      gsap.to(".loader", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        delay: 2,
      });
    });
  }, [onAnimationComplete]);

  return (
    <div>
      <div className="loader">
        <div className="img"><img src={png1} alt="" /></div>
        <div className="img"><img src={png2} alt="" /></div>
        <div className="img"><img src={png3} alt="" /></div>
        <div className="img"><img src={png4} alt="" /></div>
        <div className="img"><img src={png5} alt="" /></div>
        <div className="img"><img src={png6} alt="" /></div>
        <div className="img reveal"><img src={png7} alt="" /></div>
      </div>
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
    </div>
  );
};

export default Preloader;
