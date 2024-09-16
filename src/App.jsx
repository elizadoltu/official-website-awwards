import React, { useEffect, useRef, useState } from "react";
import Landing from "./Landing";
import anime from "animejs";
import gsap from "gsap";
import "./css/styles.css";
import About from "./About";
import Projects from "./Projects";
import CustomCursor from "./utils/CustomCursor";
import { ParallaxProvider } from "react-scroll-parallax";
import smoothscroll from "smoothscroll-polyfill";
import Contact from "./Contact";
import SinglePageProject from "./components/SinglePageProject";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation
} from "react-router-dom";
import Lenis from "lenis";
import "./css/lenis.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import usePreloadSVGAssets from "./hooks/usePreloadSVGAssets";
import { AnimatePresence } from "framer-motion";
import "./animations/hover-animation.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  usePreloadSVGAssets();
  const siteContentRef = useRef(null);
  const lenisRef = useRef();
  const [showLanding, setShowLanding] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis on component mount
    const lenis = new Lenis({
      duration: 1.2, // Adjust the smoothness of the scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
      direction: "vertical",
      smooth: true,
    });

    // Hook Lenis scroll event to GSAP's ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Add Lenis to GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0); // Disable GSAP lag smoothing for consistent animation

    lenisRef.current = lenis; // Save reference to Lenis instance

    return () => {
      // Clean up when the component is unmounted
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy(); // Destroy Lenis instance to avoid memory leaks
    };
  }, []);

  useEffect(() => {
    // Loader Counter Logic
    const counterElement = document.querySelector(".count p");
    let currentValue = 0;

    function updateCounter() {
      if (currentValue < 100) {
        let increment = Math.floor(Math.random() * 10) + 1;
        currentValue = Math.min(currentValue + increment, 100);
        if (counterElement) {
          counterElement.textContent = currentValue.toString();
        }

        let delay = Math.floor(Math.random() * 200) + 25;
        setTimeout(updateCounter, delay);
      }
    }
    updateCounter();

    const timeline = gsap.timeline({
      onComplete: () => {
        if (siteContentRef.current) {
          console.log("Updating zIndex to 1");
          siteContentRef.current.style.zIndex = "1";
        }
      },
    });
    timeline
      .to(".count", { opacity: 0, duration: 0.25, delay: 3.5 })
      .to(".pre-loader", {
        scale: 0.5,
        duration: 2,
        ease: "power4.inOut",
        delay: 3,
      })
      .to(".loader", {
        height: "0",
        duration: 1.5,
        ease: "power4.inOut",
        delay: 3.75,
      })
      .to(".loader-bg", {
        height: "0",
        duration: 1.5,
        ease: "power4.inOut",
        delay: 4,
      })
      .to(".loader-2", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.5,
        ease: "power4.inOut",
        delay: 3.5,
      });

    // GSAP Animations
    gsap.to(".count", { opacity: 0, delay: 3.5, duration: 0.25 });

    const textWrapper = document.querySelector(".ml16");
    if (textWrapper && textWrapper.textContent) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: false })
        .add({
          targets: ".ml16 .letter",
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: 1500,
          delay: (el, i) => 30 * i,
        })
        .add({
          targets: ".ml16 .letter",
          translateY: [0, 100],
          easing: "easeOutExpo",
          duration: 3000,
          delay: (el, i) => 2000 + 30 * i,
        });
    }

    gsap.to(".count", {
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.5,
      delay: 3.75,
    });

    gsap.to(".pre-loader", {
      scale: 0.5,
      ease: "power4.inOut",
      duration: 2,
      delay: 3,
    });

    gsap.to(".loader", {
      height: "0",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3.75,
    });

    gsap.to(".loader-bg", {
      height: "0",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 4,
    });

    gsap.to(".loader-2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3.5,
    });
  }, []);

  useEffect(() => {
    if (siteContentRef.current) {
      const timeoutId = setTimeout(() => {
        setShowLanding(true);
      }, 5000);

      return () => clearTimeout(timeoutId); // Cleanup on component unmount
    }
  }, [siteContentRef.current]);

  useEffect(() => {
    if (siteContentRef.current) {
      const timeoutId = setTimeout(() => {
        setShowLanding(true);
      }, 5000);

      return () => clearTimeout(timeoutId); // Cleanup on component unmount
    }
  }, [siteContentRef.current]);

  const handleProjectClick = (projectName) => {
    navigate(`/project/${encodeURIComponent(projectName)}`); // Navigate to project page when project is clicked
  };

  return (
  <AnimatePresence mode="wait">
    <ParallaxProvider>
      <div className="overflow-x-hidden w-full bg-noise opacity-90">
        <div className="pre-loader">
          <div className="loader"></div>
          <div className="loader-bg"></div>
        </div>
        <div className="loader-content">
          <div className="count">
            <p>0</p>
          </div>
          <div className="copy">
            <p className="ml16 font-clash-grotesk">Eliza Doltu</p>
          </div>
        </div>
        <div className="loader-2"></div>
        <div
          className="site-content w-full"
          ref={siteContentRef}
          style={{ zIndex: "-1" }}
        ></div>
        
          <Routes location={location} key={location.pathname}>
            {showLanding && (
              <>
                <Route
                  path="/*"
                  element={
                    <>
                      <CustomCursor />
                      <Landing />
                      <About />
                      <Projects onProjectClick={handleProjectClick} />
                      <Contact />
                    </>
                  }
                />
                <Route path="/project/:name" element={<SinglePageProject />} />
              </>
            )}
          </Routes>
       
      </div>
    </ParallaxProvider> </AnimatePresence>
  );
};

export default App;
