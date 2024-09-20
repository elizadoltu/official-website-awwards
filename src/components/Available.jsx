import React from "react";
import contactAbstract from '../assets/abstract-available.svg';
import "../css/contact.css";
import { useParams, Link } from "react-router-dom";
import projectsData from "../utils/data";
import ScrollToTop from "../hooks/ScrollToTop";

const Available = ({ project }) => {
  ScrollToTop();
  const currentIndex = projectsData.findIndex((p) => p.name === decodeURIComponent(project.name));
  const nextIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  return (
    <div className="tablet:w-full tablet:pb-5 mt-40">
      <div className="absolute tablet:-mt-40 right-0 mobile:-mt-12">
        <img src={contactAbstract} alt="abstract thing" 
        className="mobile:w-28 tablet:w-auto"/>
      </div>
      <div className="flex justify-center items-center main-container w-full grow p-5">
        <div className="tablet:pt-10 tablet:pl-10 tablet:pr-10 mobile:p-6 rounded-3xl bg-font-color uppercase flex flex-col justify-between grow w-full">
        <div className="flex flex-col tablet:items-end mobile:text-6xl mobile:items-start mobile:ml-0 tablet:ml-0 grow">
  <h1 
    className="font-clash-grotesk text-bg-color uppercase tablet:-mt-12 w-full flex justify-center"
    style={{ fontSize: 'clamp(2rem, 8vw, 21rem)' }} // Use clamp to control the font size
  >
    AVAILABLE
  </h1>
  <p className="text-bg-color tablet:-mt-12 tablet:w-2/6 mobile:w-80 tablet:text-right tablet:text-lg mobile:text-sm">
    you can check out this project in more details here
  </p>
</div>
          <div className="text-bg-color flex tablet:flex-row mobile:flex-col tablet:items-end tablet:justify-between pt-20 font-urbanist font-bold text-lg -mb-3">
            <div className="flex items-end">
              <div>
                <ul className="list-none">
                  {Object.entries(project.socials).map(([key, { name, link }]) => (
                    <li key={key}>
                      <a href={link} target="_blank" rel="noopener noreferrer" className="hover-link -mt-5">
                        <span><span>{name}</span><span>{name}</span></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <Link to={`/`}>
                  <p className="hover-link -mb-5">
                        <span><span>home</span><span>home</span></span>
                      </p>
              </Link>
              <Link to={`/project/${nextProject.name}`} className="next-project-button">
              <p className="hover-link">
                        <span><span>next project</span><span>next project</span></span>
                      </p>
              </Link>
            </div>
            <p className="mb-5">©all rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;
