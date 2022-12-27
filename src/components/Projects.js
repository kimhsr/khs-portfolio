import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="projectsScroll">
      <div className="projectsBackground">
        <div className="projectsTitle">
          <div className="projectsText">PROJECTS</div>
        </div>
        <div className="projectsContainer">
          <div className="projectsContent">넷플릭스 클론 웹사이트</div>
          <div className="projectsDate">
            2022.11 ~ 2022.12 (1人 개인 프로젝트)
          </div>
          <div className="content">
            <img
              alt="netflixClone"
              src="img/netflixClone.png"
              className="projectsImgNet"
            />
            <div className="">
              <b>넷플릭스 클론 웹사이트입니다.</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
