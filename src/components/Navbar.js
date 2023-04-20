import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">WOXRO</a>
      </div>
      <ul className={showMenu ? "menu active" : "menu"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
      <div className="toggle-menu" onClick={toggleMenu}>
        <div className={showMenu ? "hamburger active" : "hamburger"}></div>
      </div>
    </nav>
  );
}

export default Navbar;
