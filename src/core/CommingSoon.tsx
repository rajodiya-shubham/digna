import React from "react";
import "./style.css";
type CommingSoonProps = {};

const CommingSoon: React.FC<CommingSoonProps> = () => {
  return (
    <div className="mh-100">
      <div className="banner d-flex align-items-center justify-content-center">
        <h1 style={{ color: "#FFA500" }}>Coming Soon...</h1>
      </div>
    </div>
  );
};

export default CommingSoon;
