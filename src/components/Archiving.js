import React from "react";
import "./Archiving.css";

function Archiving() {
  return (
    <div id="archivingScroll">
      <div className="archivingBackground">
        <div className="archivingPadding">
          <div className="archivingTitle">
            <div className="archivingText">ARCHIVING</div>
          </div>
          <div className="archivingContainer">
            <div className="archivingback">
              <img
                alt="archivingImg"
                src={`${process.env.PUBLIC_URL}/img/git-hub-archiving.png`}
                className="archivingImg"
              />
              <a
                href="http://github.com/kimhsr"
                target="_blank"
                rel="noreferrer"
              >
                <div className="archivingUrl">github.com/kimhsr</div>
              </a>
              <div className="archivingDescription">
                <p>
                  <b>소스 코드 저장소</b>입니다.
                </p>
                <ul>
                  <li>과거 프로젝트, 프로그램 소스 코드</li>
                  <li>혼자서 코딩 연습을 위해 끄적이던 소스 코드</li>
                  <li>교육 수강한 수업들의 코딩 과제 소스 코드</li>
                </ul>
              </div>
            </div>
            <div className="archivingback" id="archivingback2">
              <img
                alt="velogImg"
                src={`${process.env.PUBLIC_URL}/img/Velog.png`}
                className="archivingImg2"
              />
              <a
                href="https://velog.io/@kimhsr"
                target="_blank"
                rel="noreferrer"
              >
                <div className="archivingUrl">velog.io/@kimhsr</div>
              </a>
              <div className="archivingDescription">
                <p>
                  <b>복습하려고 만든 블로그</b>
                  입니다.
                </p>
                <ul>
                  <li>배운 내용 복슴 겸 정리</li>
                  <li>자주 검색하게 되는 내용 기록</li>
                  <li>까먹어도 쉽게 찾을 수 있는 에러 기록</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archiving;
