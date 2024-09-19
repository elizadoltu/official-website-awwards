import React, { useState, useEffect } from "react";
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

const isMobile = () => window.innerWidth <= 768; // Adjust based on your breakpoint for mobile

const SinglePageProject = () => {
  ScrollToTop();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { name } = useParams();
  const project = projectsData.find((p) => p.name === decodeURIComponent(name));

  const parallaxConfig = isMobile()
    ? {
        firstName: { translateX: [-20, -10], speed: 5 }, // Adjust for mobile
        lastName: { translateX: [20, -10], speed: 5 },
        imageProject: { speed: 5 },
      }
    : {
        firstName: { translateX: [-50, 20], speed: 10 }, // Desktop values
        lastName: { translateX: [30, -20], speed: 10 },
        imageProject: { speed: 10 },
      };

  const { ref: firstName } = useParallax(parallaxConfig.firstName);
  const { ref: lastName } = useParallax(parallaxConfig.lastName);
  const { ref: imageProject } = useParallax(parallaxConfig.imageProject);

  useEffect(() => {
    if (project) {
      preloadImages(project.gridImages);
      const timer = setTimeout(() => setImagesLoaded(true), 500);
      return () => clearTimeout(timer);
    }
  }, [project]);

  return (
    <div className="w-full bg-bg-color text-font-color overflow-hidden">
      <CustomCursor />
      {project ? (
        <div className="w-full">
          <div className="font-clash-grotesk font-bold uppercase w-full tablet:text-12xl mobile:text-7xl">
            <h1 className="tablet:-mt-5 tablet:-ml-40 mobile:mt-10" ref={firstName}>
              {project.firstname}/
            </h1>
            <h1 className="tablet:-mt-28 tablet:ml-64" ref={lastName}>
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
            className="flex items-end mobile:flex-col tablet:flex-row font-urbanist p-3 uppercase text-lg mobile:text-sm tablet:text-lg"
            ref={imageProject}
          >
            <p className="tablet:text-right mobile:text-left mr-3">
              {project.details}
            </p>
            <div className="mobile:mt-8 tablet:mt-0">
              <p className="mb-3">{project.description}</p>
              <img
                src={project.hero}
                alt="image of a project"
                className="rounded-md filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full tablet:-mt-10 tablet:text-10xl mobile:text-7xl font-clash-grotesk">
            <h1 className="flex justify-end tablet:-mr-32">
              {project.month}/
            </h1>
            <div className="flex flex-col items-center">
              {" "}
              <h1 className="tablet:-mt-10 italic">
                &#40;{project.year}/&#41;
              </h1>
              <ul className="list-none tablet:-ml-96 mobile:-ml-20 mobile:mt-10">
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
          <div className="grid tablet:grid-cols-2 tablet:grid-rows-2 w-full h-full gap-2 p-3 mt-10 mobile:grid-cols-1">
            {project.gridImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            ))}
          </div>
          <Available project={project} />
        </div>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default transition(SinglePageProject);
