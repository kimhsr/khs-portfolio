import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerBackground">
      <a href="http://github.com/kimhsr" target="_blank">
        <img className="footerIcon" alt="github" src="img/git-hub.png"></img>
      </a>
      <div className="footerCopyright">
        © 2022. Kim Hyun Sung. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
