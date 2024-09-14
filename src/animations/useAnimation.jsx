// useAnimations.js
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnimations = () => {
  useEffect(() => {
    gsap.fromTo(
      ".h2-animation",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease:"power4.inOut",
        scrollTrigger: {
          trigger: ".h2-animation",
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none none",
          markers: false,
          once: true,
        }
      }
    );
  }, []);
};

export default useAnimations;
