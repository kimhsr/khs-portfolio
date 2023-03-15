import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="projectsScroll">
      <div className="projectsBackground">
        <div className="projectsPadding">
          <div className="projectsTitle">
            <div className="projectsText">PROJECTS</div>
          </div>
          <div className="projectsContainer">
            <div className="projectsContent">포트폴리오 웹사이트</div>
            <div className="projectsDate">
              2023.02 ~ 2023.03 (1人 개인 프로젝트)
            </div>
            <div className="content">
              <img
                alt="portfolio"
                src={`${process.env.PUBLIC_URL}/img/redditProject.png`}
                className="projectsImgNet"
              />
              <div className="contentMainBack">
                <div className="contentMain">
                  <b>Next.js의 학습을 위해 reddit을 클론 코딩 한 웹사이트</b>
                  입니다.
                  <br />
                  프론트엔드 부분은 리액트의 NextJs를 사용하고,
                  <br />
                  백엔드 부분은 NodeJs와 ExpressJs를 사용했습니다.
                  <br />
                  두 부분 모두 언어는 타입스크립트를 사용했습니다.
                  <br />
                  데이터베이스는 PostgreSQL을 이용하며 TypeORM을 이용해서 컨트롤
                  했습니다.
                  <br />
                  Next.js의 학습 방법과
                  <br />
                  백엔드와 데이터베이스가 어떻게 돌아가는지 알 수 있는 좋은
                  기회였습니다.
                  <br />
                  <br />
                  <a
                    href="https://github.com/kimhsr/reddit-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="contentButton">자세히 보기</div>
                  </a>
                </div>
                <div className="projectsDescription">
                  <div className="projectsDeTitle">✔ 주요 기능</div>
                  <div className="projectsDeContent">
                    로그인, 회원가입, 커뮤니티 생성, 이미지 업로드
                    <br />
                    게시글 작성, 댓글, 투표 기능
                  </div>
                </div>
                <div className="projectsDescription">
                  <div className="projectsDeTitle">✔ URL</div>
                  <a
                    href="http://reddit-project.kro.kr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="projectsDeContent">
                      reddit-project.kro.kr
                    </div>
                  </a>
                </div>
                <div className="projectsDescription">
                  <div className="projectsDeTitle">✔ SKILLS</div>
                  <div className="projectsDeContent">
                    Next.js, Typescript, Tailwind CSS,
                    <br />
                    ExpressJS, Postgres, Doker
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="projectsContainer">
            <div className="projectsContent">포트폴리오 웹사이트</div>
            <div className="projectsDate">2022.12 (1人 개인 프로젝트)</div>
            <div className="content">
              <img
                alt="portfolio"
                src={`${process.env.PUBLIC_URL}/img/portfolio.png`}
                className="projectsImgNet"
              />
              <div className="contentMainBack">
                <div className="contentMain">
                  <b>포트폴리오 용도로 제작한 웹사이트</b>
                  입니다.
                  <br />
                  React를 사용하였으며, 대부분 CSS를 사용하였습니다.
                  <br />
                  <br />
                  <a
                    href="https://github.com/kimhsr/khs-portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="contentButton">자세히 보기</div>
                  </a>
                </div>
                <div className="projectsDescription">
                  <div className="projectsDeTitle">✔ 주요 기능</div>
                  <div className="projectsDeContent">
                    간단한 자기소개, 인적 사항, 기술 스택,
                    <br /> GitHub 링크, 프로젝트 경험
                  </div>
                </div>
                <div className="projectsDescription">
                  <div className="projectsDeTitle">✔ URL</div>
                  <a
                    href="https://khs-portfolio.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="projectsDeContent">
                      khs-portfolio.web.app
                    </div>
                  </a>
                </div>
                <div className="projectsDescription">
                  <div className="projectsDeTitle">✔ SKILLS</div>
                  <div className="projectsDeContent">React.js, CSS</div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectsContainer">
            <div className="projectsContent">넷플릭스 클론 웹사이트</div>
            <div className="projectsDate">
              2022.11 ~ 2022.12 (1人 개인 프로젝트)
            </div>
            <div className="content">
              <img
                alt="netflix"
                src={`${process.env.PUBLIC_URL}/img/netflix.png`}
                className="projectsImgNet"
              />
              <div className="contentMainBack">
                <div className="contentMain">
                  <b>React의 학습을 위해 NETFLIX를 클론 코딩 한 웹사이트</b>
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
