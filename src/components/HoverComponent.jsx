import React, { useEffect } from "react";

const preloadImage = (url) => {
  const img = new Image();
  img.src = url;
};

const HoverComponent = ({ project }) => {
  useEffect(() => {
    preloadImage(project.image);
  }, [project.image]);

  return (
    <div className="bg-black w-256 h-256">
      <div>
        <img src={project.image} alt="image of a project" className="w-full h-auto" />
      </div>
      <div className="flex flex-col justify-between font-urbanist text-bg-color text-base">
        <div className="flex justify-between">
          <p className="uppercase font-black">{project.name}</p>
          <ul className="list-none">
            {project.keywords.map((keyword, i) => (
              <li key={i} className="-mb-1 uppercase font-black">
                {keyword}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <p className="font-black text-xs">20</p>
          <p className="font-black text-xs">24</p>
          <p className="uppercase">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HoverComponent;
