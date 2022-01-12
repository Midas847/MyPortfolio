import React, { useState } from "react";
import "./Navbar.css";

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
            <a href="#Home">HOME</a>
          </li>
          <li>
            <a href="#Works">WORKS</a>
          </li>

          <li>
            <a href="">ABOUT ME</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="class-icons">
        <i className="fab fa-github fa-lg"></i>
        <i class="fab fa-linkedin-in fa-lg"></i>
        <i class="fab fa-instagram fa-lg"></i>
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
