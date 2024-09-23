import React, { useEffect, useRef } from "react";
import aboutPhoto from "./assets/about-photo.svg";
import { useParallax } from "react-scroll-parallax";
import "./css/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import aboutImage2 from "./assets/about-image-2.jpg";
import about1 from "./assets/ABOUT-1.png";
import about2 from "./assets/ABOUT-2.png";
import aboutImage3 from "./assets/about-image-3.jpg";

// Utility function to determine if the device is mobile
const isMobile = () => window.innerHeight <= 768;

const About = () => {
  //const parallaxConfig = isMobile()
    //? { translateY: [-30, 10], speed: 5 } 
    //: { translateY: [0, 50], speed: 10 }; 

  // Apply the parallax effect to the text
  //const { ref: textRef } = useParallax(parallaxConfig);

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
    <div className="w-full font-urbanist uppercase p-2 pb-40" id="about">
      <div>
        <h1 className="font-clash-grotesk tablet:text-10xl mobile:text-7xl about-title">general+</h1>
      </div>
      <div className="grid tablet:grid-cols-2 mobile:grid-cols-1 gap-4">
        <div className="font-bold p-about">
          <img src={about2} alt="photo with eliza doltu" className="rounded-lg"/>
          <p className="mt-4 text-lg">eliza - teodora doltu &nbsp;&nbsp; student &nbsp;&nbsp; &#40;16/07/2003&#41;</p>
          <p className="text-lg">romania &nbsp;&nbsp; targu ocna &nbsp;&nbsp; iasi</p>
        </div>
        <div className="p-about">
          <img src={about1} alt="photo with a cat and eliza doltu" className="rounded-lg"/>
          <p className="text-lg mt-4">Hello, my name is Eliza-Teodora Doltu, and I am a Romanian web developer and designer. Ever since I can remember, I've wanted to express my creativity in any way possible and create something beautiful.</p>
          <p className="text-lg mt-5">Websites are very similar to storytelling; they tell a story through images, colors, and fonts.    It's my responsibility to craft the best story possible.</p>
          <h1 className="font-clash-grotesk tablet:text-10xl mobile:text-7xl">&#40;info&#41;</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
