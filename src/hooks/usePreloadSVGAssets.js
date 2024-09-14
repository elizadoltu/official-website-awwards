import { useEffect } from "react";

// Preload function for dynamically imported assets
const preloadSVGs = (files) => {
  for (const path in files) {
    files[path](); // Preload by executing the function returned by import.meta.glob()
  }
};

const usePreloadSVGAssets = () => {
  useEffect(() => {
    // Dynamically import all SVG files from the assets directory
    const svgContext = import.meta.glob("../assets/**/*.svg");

    // Preload all SVGs
    preloadSVGs(svgContext);
  }, []);
};

export default usePreloadSVGAssets;
