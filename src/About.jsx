import React, { useEffect, useRef } from "react";
import aboutPhoto from "./assets/about-photo.svg";
import { useParallax } from "react-scroll-parallax";
import "./css/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import aboutImage2 from "./assets/about-image-2.jpg";
import aboutImage3 from "./assets/about-image-3.jpg";

// Utility function to determine if the device is mobile
const isMobile = () => window.innerHeight <= 768;

const About = () => {
  const parallaxConfig = isMobile()
    ? { translateY: [-30, 10], speed: 5 } 
    : { translateY: [0, 50], speed: 10 }; 

  // Apply the parallax effect to the text
  const { ref: textRef } = useParallax(parallaxConfig);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      ".about-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 120%",
          end: "bottom 50%",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      ".p-about",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".p-about",
          start: "top 120%",
          end: "bottom 50%",
          toggleActions: "play none none none",
          markers: false,
        },
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div
      className="w-full min-h-screen flex tablet:flex-row mobile:flex-col justify-between font-urbanist relative"
      id="about"
    >
      <div className="ml-5 mobile:mb-20 tablet:mb-0" ref={textRef}>
        <h1 className="font-extrabold tablet:text-9xl mobile:text-4xl about-title">
          General Info
        </h1>
        <div className="flex mt-5 ml-2 p-about">
          <p className="font-extrabold w-20">Full name</p>
          <p className="ml-28">Eliza - Teodora Doltu</p>
        </div>
        <div className="flex ml-2 p-about">
          <p className="font-extrabold w-20">Age</p>
          <p className="ml-28">21 years</p>
        </div>
        <div className="flex ml-2 p-about">
          <p className="font-extrabold w-20">Status</p>
          <p className="ml-28">Student</p>
        </div>
      </div>

      <div className="flex flex-col tablet:w-2/5 mobile:w-full mobile:p-2">
        <div>
          <img
            src={aboutPhoto}
            alt="image of eliza teodora doltu on a beach"
            className="rounded-xl filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
          />
        </div>
        <div className="w-11/12">
          <h1 className="font-extrabold text-2xl mt-2">Who am I?</h1>
          <p className="mt-5 p-about">
            Hello, my name is Eliza-Teodora Doltu, and I am a Romanian web
            developer and designer. Ever since I can remember, I've wanted to
            express my creativity in any way possible and create something
            beautiful.
          </p>
          <p className="mt-3 p-about">
            Websites are very similar to storytelling; they tell a story
            through images, colors, and fonts. It's my responsibility to craft
            the best story possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
