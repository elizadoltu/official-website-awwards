import React from "react";

const preloadImage = (url) => {
  const img = new Image();
  img.src = url;
};

const HoverComponent = ({ project }) => {
  return (
    <div 
      className="bg-font-color w-auto h-auto rounded-xl"
      onMouseEnter={() => preloadImage(project.image)} 
    >
      <div>
       
        <img src={project.popup} alt="image of a project" className="w-full h-auto" />
      </div>
      {/*<div className="flex flex-col justify-between font-urbanist text-bg-color text-base p-1">
        <div className="flex justify-between">
          <p className="uppercase font-bold">{project.name}</p>
          <ul className="list-none">
            {project.keywords.map((keyword, i) => (
              <li key={i} className="-mb-1 uppercase font-bold">
                {keyword}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <p className=" text-xs">20</p>
          <p className=" text-xs">24</p>
          <p className="uppercase">{project.description}</p>
        </div>
      </div> */}
    </div>
  );
};

export default HoverComponent;
