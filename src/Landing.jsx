import React, { useState, useEffect, useRef } from "react";
import DateObject from "react-date-object";
import gsap from "gsap";
import "./css/styles.css";
import CustomCursor from "./utils/CustomCursor";
import svgLanding from "./assets/abstract-landing.svg";
import { useParallax, ParallaxProvider } from "react-scroll-parallax";
import smoothscroll from "smoothscroll-polyfill";
import "./animations/hover-animation.css";

const Landing = () => {
  

  const [time, setTime] = useState(
    new DateObject({ timezone: "Europe/Bucharest" })
  );
  const smoothScrollWrapperRef = useRef(null);
  const { ref: titleDesigner } = useParallax({
    translateX: [10, -20],
    speed: 10,
    easing: "easeInOutQuad",
  });
  const { ref: titleDeveloper } = useParallax({
    translateX: [0, 20],
    speed: 10,
    easing: "easeInOutQuad",
  });
  const speed = 0.08;
  let offset = 0;
  let callScroll;

  const handleLinkClick = (sectionId, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll to the section using custom smoothScroll logic
      const targetOffset = section.offsetTop;
      window.scrollTo({
        top: targetOffset, // Use native scroll for compatibility
      
      });
    }
  };

  useEffect(() => {
    gsap.to(".blink-colon", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    gsap.from(".custom-animation", {
      opacity: 1,
      ease: "power4.inOut",
      duration: 1.5,
      delay: 0.5, 
      stagger: 0.2, 
    });

    const interval = setInterval(() => {
      setTime(new DateObject({ timezone: "Europe/Bucharest" }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /*
    useEffect(() => {

        
          const body = document.body;
            const scrollWrap = document.getElementsByClassName("smooth-scroll-animation")[0];

          const height = scrollWrap.getBoundingClientRect().height - 1;
          body.style.height = `${Math.floor(height)}px`;
    
          const smoothScroll = () => {
            offset += (window.scrollY - offset) * speed; // Updated to window.scrollY
            const transformValue = `translateY(-${offset}px) translateZ(0)`;
            scrollWrap.style.transform = transformValue;
            callScroll = requestAnimationFrame(smoothScroll);
            
          };
    
          smoothScroll();
    
          // Cleanup animation frame on unmount
          return () => cancelAnimationFrame(callScroll);
        
      }, [smoothScrollWrapperRef]);
      
    */
  const hours = time.format("hh");
  const minutes = time.format("mm");
  const ampm = time.format("A");

  const handleLinkClickDebug = (section) => {
    console.log(`Clicked on ${section}`);
  };

  return (
    <div className="w-full mt-5 min-h-screen overflow-hidden">
      <div className="flex justify-between overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="flex flex-col font-urbanist custom-animation ml-5">
            <h1>ELIZA - TEODORA DOLTU</h1>
            <h1 className="font-extrabold">DESIGNER & DEVELOPER</h1>
          </div>
          <div className="flex flex-col ml-3 font-bold text-white custom-animation">
            <h1>16</h1>
            <h1>07</h1>
          </div>
        </div>
        <div className="font-urbanist custom-animation">
          <p>LOCATION</p>
          <p className="font-extrabold">
            IASI, RO, {hours}
            <span className="blink-colon">:</span>
            {minutes} {ampm}
          </p>
        </div>
        <div className="font-urbanist flex flex-col custom-animation mr-5">
          <p>NAVIGATION</p>
          <div className="flex font-extrabold z-10">
            <a
              href="#about"
              className="hover-link"
              onClick={(e) => handleLinkClick("about", e)}
            >
              <span>
                <span>ABOUT</span>
                <span>ABOUT</span>
              </span>
            </a>
            <a href="#work" className="hover-link ml-3">
              <span>
                <span>WORK</span>
                <span>WORK</span>
              </span>
            </a>
            <a href="#contact" className="hover-link ml-3">
              <span>
                <span>CONTACT</span>
                <span>CONTACT</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="custom-animation overflow-hidden">
        <div
          className="flex justify-center items-center text-12xl font-clash-grotesk ml-80 -mr-96"
          ref={titleDesigner}
        >
          <img
            src={svgLanding}
            alt="image with a metal thing"
            className="z-10 -mr-48"
          />
          <h1>DESIGNER</h1>
        </div>
        <h1
          className="flex justify-center items-center text-12xl font-clash-grotesk -mt-72 mr-96 -ml-96"
          ref={titleDeveloper}
        >
          DEVELOPER
        </h1>
        <h2 className="flex justify-center items-start font-urbanist -ml-96 -mt-32">
          Born to create digital art
        </h2>
      </div>
    </div>
  );
};

export default Landing;
