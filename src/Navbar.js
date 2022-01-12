import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setclicked] = useState(false);
  return (
    <header>
      <a className="name" href="/">
        Saswata Ghosh
      </a>
      <div className={`${clicked ? "global-nav" : "global-nav_active"}`}>
        <ul className={`${clicked ? "" : "openli"}`}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/works">WORKS</a>
          </li>

          <li>
            <a href="/about">ABOUT ME</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="class-icons">
        <a href="https://github.com/Midas847">
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/saswata-ghosh-a646811b8/">
          <i class="fab fa-linkedin-in fa-lg"></i>
        </a>
        <a href="https://www.instagram.com/midas.jw/">
          <i class="fab fa-instagram fa-lg"></i>
        </a>
      </div>
      <i
        className={`fas ${clicked ? "fa-times fa-lg" : "fa-bars fa-lg"}`}
        onClick={() => {
          setclicked(!clicked);
        }}
      ></i>
    </header>
  );
}

export default Navbar;
