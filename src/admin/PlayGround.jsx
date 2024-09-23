import React, { useEffect } from "react";
import gsap from "gsap";
import { useParallax } from "react-scroll-parallax";
import about1 from "../assets/ABOUT-1.png";
import about2 from "../assets/ABOUT-2.png";
import about3 from "../assets/ABOUT-3.png";

const isMobile = () => window.innerHeight <= 768;

const About = () => {

  return (
    <div className="w-full font-urbanist uppercase" id="about">
      <div>
        <h1 className="font-clash-grotesk">general+</h1>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img src={about2} alt="photo with eliza doltu" />
          <p>eliza - teodora doltu &nbsp;&nbsp; student &nbsp;&nbsp; &#40;16/07/2003&#41;</p>
          <p>romania &nbsp;&nbsp; targu ocna &nbsp;&nbsp; iasi</p>
        </div>
        <div>
          <img src={about1} alt="photo with a cat and eliza doltu" />
          <p>Hello, my name is Eliza-Teodora Doltu, and I am a Romanian web developer and designer. Ever since I can remember, I've wanted to express my creativity in any way possible and create something beautiful.</p>
          <p>Websites are very similar to storytelling; they tell a story through images, colors, and fonts.    It's my responsibility to craft the best story possible.</p>
          <h1>&#40;info&#41;</h1>
        </div>
      </div>
    </div>
  );
}