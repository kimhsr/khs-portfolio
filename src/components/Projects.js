import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="projectsScroll">
      <div className="projectsBackground">
        <div className="tlqkf">
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
                alt="netflix"
                src="img/netflix.png"
                className="projectsImgNet"
              />
              <div className="contentMainBack">
                <div className="contentMain">
                  <b>포트폴리오용으로 제작된 NETFLIX 클론 코딩 프로젝트</b>
                  입니다.
                  <br />
                  React를 사용하였으며, 현재는 영화들의 간단한 정보만을
                  로딩합니다.
                  <br />
                  API는 themoviedb.org 의 api를 이용하였으며,
                  <br />
                  모든 영화 및 드라마 정보가 넷플릭스의 정보와 일치하지는
                  않습니다.
                  <br />
                  Swiper 모듈을 이용해서 슬라이드를 만들었습니다.
                  <br />
                  <br />
                  <a
                    href="https://github.com/kimhsr/react-netflix-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="contentButton">자세히 보기</div>
                  </a>
                </div>
                <div className="projectsDescription">
                  <div className="projectsDeTitle">✔ 주요 기능</div>
                  <div className="projectsDeContent">
                    영화 재생, 영화 검색, 영화 상세정보
                  </div>
                </div>
                <div className="projectsDescription">
                  <div className="projectsDeTitle">✔ URL</div>
                  <a
                    href="https://kimhsr.github.io/react-netflix-clone/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="projectsDeContent">
                      kimhsr.github.io/react-netflix-clone
                    </div>
                  </a>
                </div>
                <div className="projectsDescription">
                  <div className="projectsDeTitle">✔ SKILLS</div>
                  <div className="projectsDeContent">
                    React.js, Styled Component, <br />
                    The Movie DB API, react-router, swiper
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
