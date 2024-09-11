import React, { useEffect, useRef } from "react";
import aboutPhoto from "./assets/about-photo.svg";
import { useParallax } from "react-scroll-parallax";
import "./css/styles.css";

const About = () => {
  const { ref: textRef } = useParallax({ speed: 50 });
  const smoothScrollWrapperRef = useRef(null);
  const speed = 0.08;
  let offset = 0;
  let callScroll;

  /*useEffect(() => {
    const scrollWrap = smoothScrollWrapperRef.current;

    if (scrollWrap) {
      // Ensure body height adjusts to the full content height
      const body = document.body;
      const height = scrollWrap.getBoundingClientRect().height;
      body.style.height = `${height}px`;

      const smoothScroll = () => {
        offset += (window.scrollY - offset) * speed;
        scrollWrap.style.transform = `translateY(-${offset}px)`;
        callScroll = requestAnimationFrame(smoothScroll);
      };

      smoothScroll();

      // Cleanup animation frame on unmount
      return () => cancelAnimationFrame(callScroll);
    }
  }, [smoothScrollWrapperRef]);
  */

  return (
    <div
      className="w-full min-h-screen flex justify-between font-urbanist relative"
      id="about"
    >
      <div className="ml-5" ref={textRef}>
        <h1 className="font-extrabold text-9xl">General Info</h1>
        <div className="flex mt-5 ml-2">
          <p className="font-extrabold w-20">Full name</p>
          <p className="ml-28">Eliza - Teodora Doltu</p>
        </div>
        <div className="flex ml-2">
          <p className="font-extrabold w-20">Age</p>
          <p className="ml-28">21 years</p>
        </div>
        <div className="flex ml-2">
          <p className="font-extrabold w-20">Status</p>
          <p className="ml-28">Student</p>
        </div>
      </div>
      <div className="flex flex-col w-2/5">
        <div>
          <img src={aboutPhoto} alt="image of eliza teodora doltu on a beach" />
        </div>
        <div className="w-11/12">
          <h1 className="font-extrabold text-2xl mt-2">Who am I?</h1>
          <p className="mt-5">
            Hello, my name is Eliza-Teodora Doltu, and I am a Romanian web
            developer and designer. Ever since I can remember, I've wanted to
            express my creativity in any way possible and create something
            beautiful.
          </p>
          <p className="mt-3">
            Websites are very similar to storytelling; they tell a story through
            images, colors, and fonts. It's my responsibility to craft the best
            story possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
