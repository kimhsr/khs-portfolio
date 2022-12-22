import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { FaBars } from "react-icons/fa";
import { links } from "./data";

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
    // <div className={`nav ${show && "nav__white"}`}>
    //   <div className="nav__container">
    //     <div
    //       className={`nav__logo ${show && "nav__black"}`}
    //       onClick={() => window.location.reload()}
    //     >
    //       KHS's Portfolio
    //     </div>
    //     <div className="nav__menus">
    //       <div className={`nav__menu ${show && "nav__black"}`}>About me</div>
    //       <div className={`nav__menu ${show && "nav__black"}`}>Skills</div>
    //       <div className={`nav__menu ${show && "nav__black"}`}>Archiving</div>
    //       <div className={`nav__menu ${show && "nav__black"}`}>Projects</div>
    //       {/* <div className="nav__menu">Career</div> */}
    //     </div>
    //     <div className="toggle__container">
    //       <div className={`nav__toggle ${show && "nav__black"}`} onClick={toggleLinks}>
    //         <FaBars />
    //       </div>
    //       {/* 메뉴버튼 클릭시 목록 보이도록 */}
    //       <div className="links-container" ref={linksContainerRef}>
    //         <ul className="links" ref={linksRef}>
    //           {/* data에서 Nav목록 가져오기 */}
    //           {links.map((link) => {
    //             const { id, url, text } = link;
    //             return (
    //               <li key={id}>
    //                 <a href={url}>{text}</a>
    //               </li>
    //             );
    //           })}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <nav className={`nav ${show && "nav__white"}`}>
      <div className="nav__center">
        <div className="nav__header">
          <div
            className={`nav__logo ${show && "nav__black"}`}
            onClick={() => window.location.reload()}
          >
            KHS's Portfolio
          </div>
          <button className="nav__toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/* 메뉴버튼 클릭시 목록 보이도록 */}
        <div className="links__container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {/* data에서 Nav목록 가져오기 */}
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
