// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

function Nav() {
  const [show, setShow] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__white"}`}>
      <div className="nav__center" id="logoScroll">
        <div className="nav__header">
          <Link to="logoScroll" spy={true} smooth={true} offset={-10000}>
            <div className={`nav__logo ${show && "nav__black"}`}>
              KHS's Portfolio
            </div>
          </Link>
          <button className="nav__toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/* 메뉴버튼 클릭시 목록 보이도록 */}
        <div className="links__container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {/* data에서 Nav목록 가져오기 */}
            {/* {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })} */}
            <Link to="aboutScroll" spy={true} smooth={true} offset={-75}>
              <div className="links">About me</div>
            </Link>
            <Link to="skillsScroll" spy={true} smooth={true} offset={-75}>
              <div className="links">Skills</div>
            </Link>
            <Link to="archivingScroll" spy={true} smooth={true} offset={-75}>
              <div className="links">Archiving</div>
            </Link>
            <Link to="projectsScroll" spy={true} smooth={true} offset={-75}>
              <div className="links">Projects</div>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
