import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../utils/data";
import { useParallax } from "react-scroll-parallax";
import Available from "./Available";
import ScrollToTop from "../hooks/ScrollToTop";
import CustomCursor from "../utils/CustomCursor";
import transition from "../animations/transition";
import "../animations/hover-animation.css";

const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const SinglePageProject = () => {
  ScrollToTop();
  const { ref: imageProject } = useParallax({ speed: 10 });
  const { ref: firstName } = useParallax({
    translateX: [-100, 20],
    speed: 10,
    easing: "easeInOutQuad",
  });
  const { ref: lastName } = useParallax({
    translateX: [30, -20],
    speed: 10,
    easing: "easeInOutQuad",
  });
  /*
  const { ref: month } = useParallax({
    translateX: [10, -20],
    speed: 10,
    easing: "easeInOutSine",
  });
  const { ref: year } = useParallax({
    translateX: [0, 80],
    speed: 10,
    easing: "easeInOutSine",
  });
  */
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { name } = useParams();
  const project = projectsData.find((p) => p.name === name);

  useEffect(() => {

    if (project) {
      preloadImages(project.gridImages);

      const timer = setTimeout(() => setImagesLoaded(true), 500);
      return () => clearTimeout(timer);
    }
  }, [project]);

  return (
    <div className="w-full bg-bg-color text-font-color">
      <CustomCursor />
      {project ? (
        <div className="w-full">
          <div className="font-clash-grotesk font-bold uppercase w-full text-12xl">
            <h1 className="-mt-20 -ml-40" ref={firstName}>
              {project.firstname}/
            </h1>
            <h1 className="-mt-64 ml-64" ref={lastName}>
              {project.lastname}
            </h1>
          </div>
          <div>
            {project.keywords.map((keyword, i) => (
              <p key={i} className="font-urbanist font-bold uppercase ml-3">
                {keyword}
              </p>
            ))}
          </div>
          <div
            className="flex items-end font-urbanist p-3 uppercase text-lg"
            ref={imageProject}
          >
            <p className="text-right mr-3">{project.details}</p>
            <div>
              <p className="mb-3">{project.description}</p>
              <img
                src={project.hero}
                alt="image of a project"
                className="rounded-md"
              />
            </div>
          </div>
          <div className="w-full -mt-10 text-10xl font-clash-grotesk">
            <h1 className="flex justify-end -mr-32">
              {project.month}/
            </h1>
            <div className="flex flex-col items-center">
              {" "}
              <h1 className="-mt-32 italic">
                &#40;{project.year}/&#41;
              </h1>
              <ul className="list-none -ml-96">
                {project.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="font-urbanist text-lg uppercase font-bold"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-2 p-3 mt-10">
            {project.gridImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            ))}
          </div>
          <Available project={project}/>
        </div>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default transition(SinglePageProject);
