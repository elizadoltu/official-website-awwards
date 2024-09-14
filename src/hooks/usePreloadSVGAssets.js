import { useEffect } from "react";

// Preload function for dynamically imported assets
const preloadAssets = (files) => {
  for (const path in files) {
    files[path](); // Preload by executing the function returned by import.meta.glob()
  }
};

const usePreloadAssets = () => {
  useEffect(() => {
    // Dynamically import all SVG and PNG files from the assets directory
    const svgContext = import.meta.glob("../assets/**/*.svg");
    const pngContext = import.meta.glob("../assets/**/*.png");

    // Combine both contexts
    const combinedContext = { ...svgContext, ...pngContext };

    // Preload all assets
    preloadAssets(combinedContext);
  }, []);
};

export default usePreloadAssets;
