import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ParallaxProvider } from "react-scroll-parallax";
import { AnimatePresence } from "framer-motion";
import "./css/lenis.css";
import "./css/loader.css";
import "./animations/hover-animation.css";
import png1 from "./images/1.png";
import png2 from "./images/2.png";
import png3 from "./images/3.png";
import png4 from "./images/4.png";
import png5 from "./images/5.png";
import png6 from "./images/6.png";
import png7 from "./images/7.png";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showLanding, setShowLanding] = useState(false);
  const siteContentRef = useRef(null);
  const lenisRef = useRef();

  useEffect(() => {
    // Initial animation
    gsap.from("h2 div", {
      duration: 1.5,
      yPercent: 100,
      ease: "power4.inOut",
      stagger: 0.5,
    });

    gsap.to("h2", {
      duration: 1.5,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power4.inOut",
      stagger: 0.5,
    });

    const handleOverlayClick = () => {
      gsap.to("h2 div", {
        duration: 1.5,
        yPercent: -100,
        ease: "power4.inOut",
        stagger: 0.5,
      });

      gsap.to("h2", {
        duration: 1.5,
        clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        stagger: 0.5,
      });

      gsap.to(".overlay", {
        duration: 2,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
      });

      gsap.to(".img", {
        duration: 2,
        clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
        ease: "power4.inOut",
        stagger: 1.5,
      });

      gsap.to(".loader", {
        duration: 2,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        delay: 2,
      });
    };

    const overlay = document.querySelector(".overlay");
    if (overlay) {
      overlay.addEventListener("click", handleOverlayClick);
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener("click", handleOverlayClick);
      }
    };
  }, []);


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    lenisRef.current = lenis;

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (siteContentRef.current) {
      const timeoutId = setTimeout(() => {
        setShowLanding(true);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [siteContentRef.current]);

  return (
    <AnimatePresence mode="wait">
      <ParallaxProvider>
        <div className="container">
          <nav>
            <div className="logo">
              <p>codegrid</p>
            </div>
            <div className="menu">
              <p>menu</p>
            </div>
          </nav>
          <h1>your site content goes here</h1>
        </div>
        <div className="loader">
          <div className="img"><img src={png1} alt="" /></div>
          <div className="img"><img src={png2} alt="" /></div>
          <div className="img"><img src={png3} alt="" /></div>
          <div className="img"><img src={png4} alt="" /></div>
          <div className="img"><img src={png5} alt="" /></div>
          <div className="img"><img src={png6} alt="" /></div>
          <div className="img reveal"><img src={png7} alt="" /></div>
        </div>
        <div className="overlay font-urbanist text-font-color">
          <div className="col">
            <h2><div>An portuguese</div></h2>
            <h2><div>visual photographer</div></h2>
            <h2><div>based in Spain</div></h2>
          </div>
          <div className="col">
            <h2><div><span>click</span> anywhere to continue</div></h2>
          </div>
        </div>
      </ParallaxProvider>
    </AnimatePresence>
  );
};

export default App;
