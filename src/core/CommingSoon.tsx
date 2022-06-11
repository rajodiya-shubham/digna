import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import "./style.css";
type CommingSoonProps = {};

const CommingSoon: React.FC<CommingSoonProps> = () => {
  return (
    <div className="mh-100">
      <Navigation />
      <div className="banner d-flex align-items-center justify-content-center">
        <h1 style={{ color: "#FFA500" }}>Coming Soon...</h1>
      </div>
      <Footer />
    </div>
  );
};

export default CommingSoon;
