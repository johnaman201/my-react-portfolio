import React, { useEffect, useState } from "react";
import "./index.css"
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const themetoggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="toggle-theme" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default ThemeToggle;
