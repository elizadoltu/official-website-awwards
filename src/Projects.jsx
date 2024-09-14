import React, { useState } from "react";
import { useSpring, animated, useTransition } from "@react-spring/web";
import { useParallax } from "react-scroll-parallax";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./css/styles.css";
import abstractPhoto from "./assets/abstract-projects.svg";
import projectsData from "./utils/data";
import HoverComponent from "./components/HoverComponent";
import useAnimations from "./animations/useAnimation";
import CustomProjectCursor from "./custom/CustomProjectCursor";
import "./animations/hover-animation.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ onProjectClick }) => {
  const { ref: title } = useParallax({
    translateX: [10, -40],
    speed: 10,
    easing: "easeInOutSine",
  });

  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const transition = useTransition(hoveredProjectId, {
    from: { scale: 0, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 0, opacity: 0 },
    config: { tension: 350, friction: 40 },
  });

  const springStyles = useSpring({
    opacity: hoveredProjectId !== null ? 1 : 0,
    transform: hoveredProjectId !== null ? "translateY(0)" : "translateY(10px)",
    config: { tension: 350, friction: 50, precision: 0.1 },
  });

  useAnimations();

  return (
    <div
      className="z-30 w-full min-h-screen overflow-hidden relative font-urbanist flex flex-col"
      id="work"
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex ml-96" ref={title}>
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

      <div className="flex flex-col -mt-20">
        {projectsData.map((project) => (
          <div key={project.id} className="h-vh mt-96" onClick={() => onProjectClick(project.name)}>
            <div
              className="leading-1rem"
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              style={{ cursor: "pointer" }}
            >
              <h2 className="hover-h2 uppercase font-urbanist font-bold text-10xl hover:text-gray-500">
                <span>
                  <span>{project.name}</span>
                  <span>{project.name}</span>
                </span>
              </h2>

              {project.keywords.map((keyword, i) => (
                <h2
                  key={i}
                  className="hover-h2 uppercase font-urbanist font-bold text-10xl hover:text-gray-500"
                >
                  <span>
                    <span>{keyword}</span>
                    <span>{keyword}</span>
                  </span>
                </h2>
              ))}

              {transition(
                (style, item) =>
                  item && (
                    <animated.div
                      style={{
                        ...springStyles,
                        ...style,
                        position: "fixed",
                        bottom: `calc(-20px + (${
                          window.innerHeight - mousePosition.y
                        }px))`,
                        left: `calc(20px + (${mousePosition.x}px))`,
                        pointerEvents: "none",
                      }}
                    >
                      <HoverComponent
                        project={projectsData.find((p) => p.id === item)}
                      />
                    </animated.div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
