import React from "react";
import "../Styles/waveloader.css"; 

const WaveLoader: React.FC = () => {
  return (
    <div className="loader-container">
      <span className="loader-span"></span>
      <span className="loader-span"></span>
      <span className="loader-span"></span>
      <span className="loader-span"></span>
      <span className="loader-span"></span>
      <span className="loader-span"></span>
    </div>
  );
};

export default WaveLoader;
