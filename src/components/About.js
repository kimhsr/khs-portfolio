import React from "react";
import "./About.css";

function About() {
  return (
    <div id="aboutScroll">
      <div className="aboutBackground">
        <div className="aboutContainer">
          <div className="aboutText">ABOUT ME</div>
        </div>
        <div className="aboutMain">
            <div className="aboutContent">
              <div className="about">
                <img alt="person" src="img/person-fill.svg"></img>
                <div className="aboutTitle">이름</div>
                <div className="aboutName">김현성</div>
              </div>
              <div className="about">
                <img alt="calendar" src="img/calendar-fill.svg"></img>
                <div className="aboutTitle">생년월일</div>
                <div className="aboutName">95.12.11</div>
              </div>
              <div className="about">
                <img alt="geo-alt" src="img/geo-alt-fill.svg"></img>
                <div className="aboutTitle">주소지</div>
                <div className="aboutName">경기도 고양시</div>
              </div>
              <div className="about">
                <img alt="telephone" src="img/telephone-fill.svg"></img>
                <div className="aboutTitle">연락처</div>
                <div className="aboutName">010-9717-7671</div>
              </div>
              <div className="about">
                <img alt="envelope" src="img/envelope-fill.svg"></img>
                <div className="aboutTitle">이메일</div>
                <div className="aboutName">kimhsr@naver.com</div>
              </div>
              <div className="about">
                <img alt="pencil" src="img/pencil-fill.svg"></img>
                <div className="aboutTitle">학력</div>
                <div className="aboutName">
                  상명대학교(천안)
                  <br />
                  (소프트웨어학과)
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
