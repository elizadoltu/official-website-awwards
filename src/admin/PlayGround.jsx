import React, { useEffect, useRef, useState } from "react";
import Landing from "../Landing.jsx";
import gsap from "gsap";
import About from "../About";
import Projects from "../Projects";
import CustomCursor from "../utils/CustomCursor";
import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "../Contact";
import SinglePageProject from "./components/SinglePageProject";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation
} from "react-router-dom";
import Lenis from "lenis";
import "../css/lenis.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import usePreloadSVGAssets from "../hooks/usePreloadSVGAssets";
import { AnimatePresence } from "framer-motion";
import "../animations/hover-animation.css";

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

  const handleProjectClick = (projectName) => {
    navigate(`/project/${encodeURIComponent(projectName)}`); // Navigate to project page when project is clicked
  };

  return (
    <AnimatePresence mode="wait">
      <ParallaxProvider>
        <div className="overflow-x-hidden w-full bg-noise opacity-90">
          
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
}
