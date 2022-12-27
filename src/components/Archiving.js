import React from "react";
import "./Archiving.css";

function Archiving() {
  return (
    <div id="archivingScroll">
      <div className="archivingBackground">
        <div className="archivingTitle">
          <div className="archivingText">ARCHIVING</div>
        </div>
        <div className="archivingContainer">
          <div className="archivingback">
            <img
              alt="archivingImg"
              src="img/git-hub-archiving.png"
              className="archivingImg"
            />
            <a href="http://github.com/kimhsr" target="_blank" rel="noreferrer">
              <div className="archivingUrl">github.com/kimhsr</div>
            </a>
            <div className="archivingDescription">
              <p>
                <b>소스 코드 저장소</b>
                입니다.
              </p>
              <ul>
                <li>과거 프로젝트, 프로그램 소스 코드</li>
                <li>혼자서 코딩 연습을 위해 끄적이던 소스 코드</li>
                <li>교육 수강한 수업들의 코딩 과제 소스 코드</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archiving;
