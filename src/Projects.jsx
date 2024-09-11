import React, { useRef, useEffect } from "react";
import { useParallax } from "react-scroll-parallax";
import "./css/styles.css";
import abstractPhoto from "./assets/abstract-projects.svg";
import projectsData from "./utils/data";

const Projects = () => {
  const { ref: titleRef } = useParallax({
    translateX: [10, -40],
    speed: 10,
    easing: "easeInOutSine",
  });

  const { ref: refLeft } = useParallax({
    translateX: [-100, 40],
    speed: 10,
    easing: "easeInOutSine",
  });

  const { ref: refRight } = useParallax({
    translateX: [80, -10],
    speed: 10,
    easing: "easeInOutSine",
  });

  return (
    <div className="w-full overflow-hidden font-urbanist flex flex-col relative" id="work">
      <div className="flex flex-col justify-center items-center">
        <div className="flex ml-96" ref={titleRef}>
          <img
            src={abstractPhoto}
            alt="image with an abstract object"
            className="z-10"
          />
          <h1 className="font-clash-grotesk text-12xl -ml-52">PROJECTS</h1>
        </div>
        <p className="w-96 -ml-80 -mt-32">
          Explore a curated selection of projects I’ve guided from concept to
          completion. Each piece reflects my skills, creativity, and dedication
          to bringing ideas to life.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center relative z-20">
        {projectsData.map((project, index) => {
          const marginClass =
            index % 2 === 0 ? "project-margin-left" : "project-margin-right";
          const parallaxRef = index % 2 === 0 ? refLeft : refRight;
          
          useEffect(() => {
            console.log(`Project ${index} ref:`, parallaxRef.current);
          }, [parallaxRef, index]);

          return (
            <div
              key={index}
              className={`project ${marginClass} relative z-20`}
              ref={parallaxRef}
            >
              <div className="flex flex-col">
                <div className="flex flex-col text-center mix-blend-exclusion relative z-40">
                  <h1 className="font-clash-grotesk text-10xl text-center w-256 text-bg-color">
                    {project.firstname}
                  </h1>
                  <h1 className="font-clash-grotesk text-10xl text-center w-256 -mt-48 text-bg-color mix-blend-exclusion">
                    {project.lastname}
                  </h1>
                </div>

                <div className="flex justify-center items-end -mt-64 relative">
                  <img
                    src={project.image}
                    alt={`project of ${project.name}`}
                  />
                  <div className="ml-4">
                    <div>
                      {project.keywords.map((keyword, i) => (
                        <p key={i}>{keyword}</p>
                      ))}
                    </div>
                    <div>
                      <p>20</p>
                      <p>24</p>
                      <p className="w-96">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
