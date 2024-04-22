import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Silhouette.scss";
import colored from "../../assets/images/colored.png";
import figureOnly from "../../assets/images/figure-only.png";
import silhouette from "../../assets/images/silhouette.png";

export const Silhouette = () => {
  const [state, setState] = useState("colored"); // Start with the "colored" state
  const [activeImage, setActiveImage] = useState(state);

  useEffect(() => {
    // Set up the sequence and intervals for cycling through states
    const states = ["colored", "figureOnly", "silhouette"];
    let currentIdx = 0;

    const interval = setInterval(() => {
      currentIdx = (currentIdx + 1) % states.length;
      setState(states[currentIdx]);
    }, 1500); // Change state every 1500 milliseconds (1.5 seconds)

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  useEffect(() => {
    // Manage opacity transition
    const timer = setTimeout(() => {
      setActiveImage(state);
    }, 10); // Short delay for transition effect

    return () => clearTimeout(timer);
  }, [state]);

  return (
    <div className={`silhouette state-${state}`}>
      <img
        className={`subject ${activeImage === "colored" ? "visible" : ""}`}
        alt="Colored"
        src={colored}
      />
      <img
        className={`subject ${activeImage === "figureOnly" ? "visible" : ""}`}
        alt="Figure Only"
        src={figureOnly}
      />
      <img
        className={`subject ${activeImage === "silhouette" ? "visible" : ""}`}
        alt="Silhouette"
        src={silhouette}
      />
    </div>
  );
};

Silhouette.propTypes = {
  state: PropTypes.oneOf(["figureOnly", "colored", "silhouette"]),
};
