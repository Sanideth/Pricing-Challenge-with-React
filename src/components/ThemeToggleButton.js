import React, { useState, useContext } from "react";
import { ToggleContext } from "./toggleContext";

const ThemeToggleButton = (props) => {
  const { toggle, toggleData } = useContext(ToggleContext);
  const [isHovered, setIsHovered] = useState(false);
  const btnContainerStyle = isHovered ? "opaque" : "";
  const btnStyle = toggle ? "active" : "";

  return (
    <div className={`theme-toggler-container ${btnContainerStyle}`}>
      <button
        className={`btn btn-theme ${btnStyle}`}
        onClick={toggleData}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></button>
    </div>
  );
};

export default ThemeToggleButton;
