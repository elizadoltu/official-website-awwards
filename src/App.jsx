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

smoothscroll.polyfill();

const App = () => {
  const siteContentRef = useRef(null);
  const [showLanding, setShowLanding] = useState(false);
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
      })
      .to(".img", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power4.inOut",
        delay: 4.5,
        stagger: 0.25,
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

    gsap.to(".img", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 4.5,
      stagger: 0.25,
    });
  }, []);

  useEffect(() => {
    if (siteContentRef.current) {
      const timeoutId = setTimeout(() => {
        setShowLanding(true);
      }, 5000); // Adjust delay as needed

      return () => clearTimeout(timeoutId); // Cleanup on component unmount
    }
  }, [siteContentRef.current]);

  return (
    <ParallaxProvider>
      
      <div className="overflow-x-hidden w-full ">
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

        {showLanding && (
          <div>
            <CustomCursor />
            <Landing />
            <About />
            <Projects />
          </div>
        )}
      </div>
    </ParallaxProvider>
  );
};

export default App;
