import React from "react";

import Pathfinder from "./Pathfinder/Pathfinder";
import "./visualizer.css";

interface IProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

type ScreenSize = {
  height: number;
  width: number;
};

const Visualizer: React.FC<IProps> = ({ toggleDarkMode, isDarkMode }) => {
  //adjust grids and grid count to fit screen
  const [screenSize, setScreenSize] = React.useState<ScreenSize>({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  //handle controls in ToolBar

  return (
    <div className="visualizer-root">
      <Pathfinder
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        screenSize={screenSize}
      />
    </div>
  );
};

export default Visualizer;
