import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import EditProfile from "./EditProfile";
import "./style.css";
type CommingSoonProps = {};

const CommingSoon: React.FC<CommingSoonProps> = () => {
  return (
    <div className="d-flex flex-column mh-100">
      <Navigation />
      {/* <EditProfile /> */}
      <div className="banner d-flex align-items-center justify-content-center flex-grow-1">
        <h1 style={{ color: "#FFA500" }}>Coming Soon...</h1>
      </div>
      <Footer />
    </div>
  );
};

export default CommingSoon;
