import React from "react";
import "../Styles/loadingstate.css"; // Import the CSS file for the animation

const LoadingState: React.FC = () => {
  return (
    <div className="wave-loader">
      <span className="wave"></span>
      <span className="wave"></span>
      <span className="wave"></span>
      <span className="wave"></span>
      <span className="wave"></span>
      <span className="wave"></span>
    </div>
  );
};

export default LoadingState;
