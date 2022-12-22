import React from "react";
import { Link } from "react-scroll";
// import bannerImg from "../image/background_img.jpg";
import "./Banner.css";

function Banner() {
  return (
    <div className="bannerBackground">
      <div className="bannerContainer">
        <div className="bannerText">
          - 김현성 -
          <br />웹 개발자 포트폴리오
        </div>
        <hr className="bannerHr" />
        <div className="bannerTextBottom">
          안녕하세요.
          <br />
          새로운 지식과 기술을 배우는 것을 좋아하는 프론트엔드 개발자입니다.
          <br />
          나 혼자의 역량만이 아니라 내 주변,
          <br />
          그리고 함께하는 팀의 성장을 도울 수 있는 개발자가 되기 위해 노력하고
          있습니다.
        </div>
        <Link to="aboutScroll" spy={true} smooth={true} offset={-64}>
          <div className="bannerButton">더 알아보기 ↓</div>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
