import React from "react";
import bannerImg from "../image/background_img.jpg";
import "./Banner.css";

function Banner() {
  return <img alt="banner" src={bannerImg} className="bannerImg" />;
}

export default Banner;
