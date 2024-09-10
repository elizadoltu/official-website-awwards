import React, { useState, useEffect, useRef } from "react";
import DateObject from "react-date-object";
import gsap from "gsap";
import "./css/styles.css";
import CustomCursor from "./utils/CustomCursor";
import svgLanding from './assets/abstract-landing.svg';
import { useParallax, ParallaxProvider } from "react-scroll-parallax";
const Landing = () => {

    const [time, setTime] = useState(new DateObject({ timezone: "Europe/Bucharest" }));
    const smoothScrollWrapperRef = useRef(null);
    const speed = 0.06;
    let offset = 0;
    const parallax = useParallax({
        translateX: [160, -100, "easeInOutSine"],
    });
   
    useEffect(() => {
        // GSAP animations for .blink-colon
        gsap.to(".blink-colon", {
            opacity: 0, 
            repeat: -1,
            yoyo: true,
            duration: 0.5,
        });

        // GSAP reveal animation for text
        gsap.from(".custom-animation", {
            opacity: 1,
            ease: "power4.inOut",
            duration: 1.5,
            delay: 0.5, // Delay before animation starts
            stagger: 0.2 // Stagger time between elements
        });

        const interval = setInterval(() => {
            setTime(new DateObject({ timezone: "Europe/Bucharest" }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (smoothScrollWrapperRef.current) {
          const body = document.body;
          const scrollWrap = smoothScrollWrapperRef.current;
          const height = scrollWrap.getBoundingClientRect().height - 1;
    
          body.style.height = Math.floor(height) + "px";
          function smoothScroll() {
            offset += (window.pageYOffset - offset) * speed;
            const scroll = `translateY(-${offset}px) translateZ(0)`;
            scrollWrap.style.transform = scroll;
            requestAnimationFrame(smoothScroll);
          }
          smoothScroll();
        }
      }, [smoothScrollWrapperRef.current]);

    const hours = time.format("hh");
    const minutes = time.format("mm");
    const ampm = time.format("A");

    const handleLinkClick = (section) => {
        console.log(`Clicked on ${section}`);
    };

    return (
        <div className="w-full mt-5 overflow-hidden h-screen smooth-scroll-animation" ref={smoothScrollWrapperRef}>
            <CustomCursor />
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
                    <p className="font-extrabold">IASI, RO, {hours}<span className="blink-colon">:</span>
                    {minutes} {ampm}</p>
                </div>
                <div className="font-urbanist flex flex-col custom-animation mr-5">
                    <p>NAVIGATION</p>
                    <div className="flex font-extrabold z-10">
                        <a href="#about" className="cursor-pointer" onClick={() => handleLinkClick("ABOUT")}>ABOUT</a>
                        <a href="#work" className="ml-3 hover:cursor-pointer">WORK</a>
                        <a href="#contact" className="ml-3 hover:cursor-pointer">CONTACT</a>
                    </div>
                </div>
                
            </div>
            <div className="custom-animation overflow-hidden">
                <div className="flex justify-center items-center text-12xl font-clash-grotesk ml-80 -mr-96" >
                    <img src={svgLanding} alt="image with a metal thing" className="z-10 -mr-48"/>
                    <h1 ref={parallax.ref}>DESIGNER</h1>
                </div>
                <h1 className="flex justify-center items-center text-12xl font-clash-grotesk -mt-72 mr-96 -ml-96">
                    DEVELOPER
                </h1>
                <h2 className="flex justify-center items-start font-urbanist -ml-96 -mt-32">Born to create digital art</h2>
            </div>
        </div>
    )
}

export default Landing;
