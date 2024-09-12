import React, { useEffect, useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import "./css/styles.css";
import abstractPhoto from "./assets/abstract-projects.svg";
import projectsData from '../utils/data';

const Projects = () => {
  const { ref: title } = useParallax({
    translateX: [10, -40], // Move title from -100px (off-screen) to 0px as you scroll
    speed: 10, // Speed of the parallax effect
    easing: "easeInOutSine"
  });

  /*useEffect(() => {

      // Ensure body height adjusts to the full content height
      const body = document.body;
      const scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0];
      const height = scrollWrap.getBoundingClientRect().height - 1;
      body.style.height = Math.floor(height) + "px";

      const smoothScroll = () => {
        offset += (window.scrollY - offset) * speed;
        scrollWrap.style.transform = `translateY(-${offset}px)`;
        callScroll = requestAnimationFrame(smoothScroll);
      };

      smoothScroll();

      // Cleanup animation frame on unmount
      return () => cancelAnimationFrame(callScroll);
  }, []);
  */

  return (
    <div
      className="z-30 w-full min-h-screen overflow-hidden relative font-urbanist flex flex-col justify-center items-center"
      id="work"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex ml-96" ref={title}>
            <img src={abstractPhoto} alt="image with an abstract object" className="z-10"/>
          <h1 className="font-clash-grotesk text-12xl -ml-52">PROJECTS</h1>
        </div>
        <p className="w-96 -ml-80 -mt-32">
          Explore a curated selection of projects I’ve guided from concept to
          completion. Each piece reflects my skills, creativity, and dedication
          to bringing ideas to life.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
      {projectsData.map((project, index) => {
        // Determine margin class based on the index
        const marginClass = index % 2 === 0 ? 'project-margin-left' : 'project-margin-right';

        return (
          <div key={index} className="h-svh">
            <div>
              <h2 className="capitalize">{project.name}</h2>
              {project.keywords.map((keyword, i) => (
                <h2 key={i} className="capitalize">{keyword}</h2>
              ))}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Projects;
