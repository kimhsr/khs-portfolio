import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div id="skillsScroll">
      <div className="skillsBackground">
        <div className="skillsTitle">
          <div className="skillsText">SKILLS</div>
        </div>
        <div className="skillsContainer">
          <div className="skillsback">
            <div className="skillsContent">Frontend</div>
            <img alt="" />
          </div>
          <div className="skillsback">
            <div className="skillsContent">Deployment</div>
            <img alt="" />
          </div>
          <div className="skillsback">
            <div className="skillsContent">Version Control</div>
            <img alt="" />
          </div>
          <div className="skillsback">
            <div className="skillsContent">Communication</div>
            <img alt="" />
          </div>
          <div className="skillsback">
            <div className="skillsContent">Certificate</div>
            <img alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
