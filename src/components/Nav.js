import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

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
    <div className={`nav ${show && "nav__white"}`}>
      <div className="nav__container">
        <div
          className={`nav__logo ${show && "nav__black"}`}
          onClick={() => window.location.reload()}
        >
          KHS's Portfolio
        </div>
        <div className="nav__menus">
          <div className={`nav__menu ${show && "nav__black"}`}>About me</div>
          <div className={`nav__menu ${show && "nav__black"}`}>Skills</div>
          <div className={`nav__menu ${show && "nav__black"}`}>Archiving</div>
          <div className={`nav__menu ${show && "nav__black"}`}>Projects</div>
          {/* <div className="nav__menu">Career</div> */}
        </div>
      </div>
    </div>
  );
}

export default Nav;
