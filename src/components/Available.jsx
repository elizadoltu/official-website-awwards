import React from "react";
import contactAbstract from '../assets/abstract-available.svg';
import "../css/contact.css";
import { useParams, Link } from "react-router-dom";
import projectsData from "../utils/data";
import ScrollToTop from "../hooks/ScrollToTop";

const Available = ({ project }) => {
  ScrollToTop();
  const currentIndex = projectsData.findIndex((p) => p.name === project.name);
  const nextIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  return (
    <div className="w-full pb-5 mt-40">
      <div className="absolute right-0 -mt-40">
        <img src={contactAbstract} alt="abstract thing" />
      </div>
      <div className="flex justify-center items-center main-container">
        <div className="pt-10 pl-10 pr-10 rounded-3xl bg-font-color uppercase flex flex-col justify-between">
          <div className="flex flex-col items-end">
            <h1 className="text-13xl font-clash-grotesk text-bg-color uppercase -mt-40">
              AVAILABLE
            </h1>
            <p className="text-bg-color -mt-32 w-96 text-lg text-right">
              you can check out this project in more details here
            </p>
          </div>
          <div className="text-bg-color flex items-end justify-between pt-40 font-urbanist font-bold text-lg -mb-3">
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
            <div>
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
