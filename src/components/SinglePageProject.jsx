import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../utils/data";

const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const SinglePageProject = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { name } = useParams(); 
  const project = projectsData.find((p) => p.name === name); 

  useEffect(() => {

    window.scrollTo(0, 0); 

    if (project) {
      preloadImages(project.gridImages);

      const timer = setTimeout(() => setImagesLoaded(true), 500);
      return () => clearTimeout(timer);
    }
  },[project])

  return (
    <div className="w-full bg-bg-color text-font-color">
      {project ? (
        <div className="w-full">
          <div className="font-clash-grotesk font-bold uppercase w-full text-12xl">
            <h1 className="-mt-40 -ml-40">{project.firstname}/</h1>
            <h1 className="-mt-64 ml-64">{project.lastname}</h1>
          </div>
          <div>
            {project.keywords.map((keyword, i) => (
              <p key={i} className="font-urbanist font-bold uppercase ml-3">{keyword}</p>
            ))}
          </div>
          <div className="flex items-end font-urbanist p-3 uppercase text-lg">
            <p className="text-right mr-3">{project.details}</p>
            <div>
              <p className="mb-3">{project.description}</p>
              <img src={project.hero} alt="image of a project" className="rounded-md"/>
            </div>
          </div>
          <div className="w-full -mt-20 text-12xl font-clash-grotesk">
            <h1 className="flex justify-end -mr-64">{project.month}/</h1>
            <h1 className="flex justify-center -mt-64">{project.year}/</h1>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-2 p-3 -mt-20">
        {project.gridImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project image ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
          />
        ))}
      </div>
        </div>
        
      
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default SinglePageProject;
