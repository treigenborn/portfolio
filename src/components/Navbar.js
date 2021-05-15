import React, { useState } from "react";
import "./Navbar.css";
import * as faIcons from "react-icons/fa";
import * as grIcons from "react-icons/gr";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar-container">
      <div className="logo">
        <h1>TR</h1>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <grIcons.GrClose /> : <faIcons.FaBars />}
      </div>
      <div className={click ? "nav-menu active" : "nav-menu"}>
        <ul className="menu-list">
          <li className="nav-links">
            <a href="#home" onClick={closeMobileMenu}>
              HOME
            </a>
          </li>
          <li className="nav-links">
            <a href="#work" onClick={closeMobileMenu}>
              WORK
            </a>
          </li>
          <li className="nav-links">
            <a href="#about" onClick={closeMobileMenu}>
              ABOUT
            </a>
          </li>
          <li className="nav-links">
            <a href="#contact" onClick={closeMobileMenu}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
