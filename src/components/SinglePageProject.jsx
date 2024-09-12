import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../utils/data";

const SinglePageProject = () => {
  const { name } = useParams(); 
  const project = projectsData.find((p) => p.name === name); 

  return (
    <div className="h-screen w-full bg-bg-color text-font-color flex justify-center items-center">
      {project ? (
        <h1 className="font-urbanist text-9xl">{project.name}</h1>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default SinglePageProject;
