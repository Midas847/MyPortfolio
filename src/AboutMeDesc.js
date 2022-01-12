import React, { useEffect, useState } from "react";
import "./App.css";
import "./AboutMe.css";
import cloud01 from "./images/cloud01.svg";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import about from "./images/sample2.jpg";
import face from "./images/myself.jpeg";
import reactImg from "./images/react-icon.png";
import nodeImg from "./images/node-js.svg";
import cIcon from "./images/icons8-c++.svg";
import pyIcon from "./images/icons8-python.svg";
import javaIcon from "./images/icons8-java.svg";
import htmlcss from "./images/htmlcss.svg";
import jsImg from "./images/jsIcon.svg";
import mysqlIcon from "./images/icons8-mysql-logo.svg";
import tailwindIcon from "./images/download.png";
import RIcon from "./images/R-logo.png";

function AboutMeDesc() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 0, y: 100 },
  };

  const fadeDown = {
    hidden: { opacity: 0, z: 100 },
    visible: { opacity: 1, z: 0 },
  };

  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <MouseParallaxContainer
      className="App"
      containerStyles={{
        width: "100%",
        overflow: "none",
      }}
    >
      <MouseParallaxContainer
        className="main-page"
        containerStyles={{
          width: "100%",
          overflow: "none",
        }}
      >
        <motion.h1
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="heading"
          style={{ position: "absolute" }}
        >
          About<span className="name-span"> Me</span>
          <Link to="/about">
            <motion.i
              className="fas fa-arrow-left fa-xs"
              style={{
                color: "#fff",
                position: "fixed",
                marginLeft: "-620px",
                marginTop: "-100px",
                fontSize: "50px",
              }}
            ></motion.i>
          </Link>
        </motion.h1>
        <motion.span
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="bar1"
        ></motion.span>
        <motion.span
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.85 }}
          className="bar2"
        ></motion.span>
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          style={{ zIndex: 100 }}
          transition={{ duration: 1 }}
          className="para"
        >
          I love Design and Technology
        </motion.p>
        <p className="scrolldown" style={{ marginBottom: "10rem" }}>
          SCROLLDOWN
        </p>
        <span
          className="verticaline"
          style={{ bottom: "4.5rem", marginLeft: "-61rem" }}
        ></span>
        <motion.img
          animate={{ scale: 1.35 }}
          style={{ left: "48px", top: "285px" }}
          transition={{ duration: 1 }}
          className="works-img"
          src={about}
          alt=""
        />
        <div className="nav-left">
          <motion.span
            initial={{ width: 25 }}
            animate={{ width: 0 }}
            transition={{ duration: 0.2 }}
            style={{ width: "25px" }}
            className="span1"
          ></motion.span>
          <motion.span
            initial={{ width: 25 }}
            animate={{ width: 0 }}
            transition={{ duration: 0.2 }}
            style={{ width: "25px" }}
            className="span2"
          ></motion.span>
          <motion.span
            initial={{ width: 40 }}
            animate={{ width: 0 }}
            transition={{ duration: 0.2 }}
            style={{ width: "25px" }}
            className="span3"
          ></motion.span>
          <motion.span
            initial={{ width: 25 }}
            animate={{ width: 0 }}
            transition={{ duration: 0.2 }}
            style={{ width: "25px" }}
            className="span4"
          ></motion.span>
        </div>
        <div className="page-number">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ color: "#fff" }}
            transition={{ duration: 0.85 }}
          >
            02
          </motion.p>
        </div>
      </MouseParallaxContainer>

      <motion.a
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        href="/aboutme"
        className="show-btn"
      >
        Show me more
      </motion.a>

      <div className="new-page">
        <div>
          <div className="who">
            <div className="page-number-desc">
              <span style={{ marginLeft: "-10px" }}></span>
              <p>01</p>
            </div>
            <h1 className="who-heading">WHO I AM</h1>
          </div>
          <div className="about-para">
            <h1>SASWATA GHOSH</h1>
            <p className="about-text">
              Born in 2001 in India, I graduated from Hill Top Scool, Jamsehdpur
              <br />
              and I am currently pursuing my B.Tech degree From VIT Vellore. I
              am
              <br /> really passionate about competitive coding, web development
              and <br />
              music.
            </p>
            <img src={face} className="face" alt="" />
          </div>
          <div className="passion">
            <div className="who">
              <div className="page-number-desc">
                <span
                  style={{
                    marginLeft: "100px",
                    marginTop: "950px",
                    marginLeft: "-10px",
                  }}
                ></span>
                <p
                  style={{
                    marginLeft: "100px",
                    marginTop: "1005px",
                    marginLeft: "-40px",
                  }}
                >
                  02
                </p>
              </div>
              <h1 className="who-heading">SKILL SET</h1>
            </div>
            <div className="skill-set">
              <ul>
                <li>
                  <div className="skill-set-icon">
                    <img src={reactImg} alt="" />
                  </div>
                  <div className="skill-set-detail">
                    <div className="skill-set-meta">
                      <div className="skill-set-name">
                        <h4>React.js</h4>
                        <p>2 years</p>
                      </div>
                      <p className="skill-set-title">
                        90{" "}
                        <span
                          className="skill-set-percent"
                          style={{ color: "#072142" }}
                        >
                          %
                        </span>{" "}
                      </p>
                    </div>
                    <div className="skill-set-bar"></div>
                  </div>
                </li>
                <li style={{ marginTop: "35px" }}>
                  <div className="skill-set-icon">
                    <img src={nodeImg} alt="" />
                  </div>
                  <div className="skill-set-detail">
                    <div
                      className="skill-set-meta"
                      style={{ marginTop: "-5rem" }}
                    >
                      <div className="skill-set-name">
                        <h4>Node.js</h4>
                        <p>1 year</p>
                      </div>
                      <p className="skill-set-title">
                        70{" "}
                        <span
                          className="skill-set-percent"
                          style={{ color: "#072142" }}
                        >
                          %
                        </span>{" "}
                      </p>
                    </div>
                    <div className="skill-set-bar nodeImg"></div>
                  </div>
                </li>
                <li style={{ marginTop: "40px" }}>
                  <div className="skill-set-icon">
                    <img src={cIcon} alt="" />
                  </div>
                  <div className="skill-set-detail">
                    <div
                      className="skill-set-meta"
                      style={{ marginTop: "-5rem" }}
                    >
                      <div className="skill-set-name">
                        <h4>C/C++</h4>
                        <p>2 years</p>
                      </div>
                      <p className="skill-set-title">
                        80{" "}
                        <span
                          className="skill-set-percent"
                          style={{ color: "#072142" }}
                        >
                          %
                        </span>{" "}
                      </p>
                    </div>
                    <div className="skill-set-bar CImg"></div>
                  </div>
                </li>
                <li style={{ marginTop: "40px" }}>
                  <div className="skill-set-icon">
                    <img src={pyIcon} alt="" />
                  </div>
                  <div className="skill-set-detail">
                    <div
                      className="skill-set-meta"
                      style={{ marginTop: "-5rem" }}
                    >
                      <div className="skill-set-name">
                        <h4>Python</h4>
                        <p>2 years</p>
                      </div>
                      <p className="skill-set-title">
                        80{" "}
                        <span
                          className="skill-set-percent"
                          style={{ color: "#072142" }}
                        >
                          %
                        </span>{" "}
                      </p>
                    </div>
                    <div className="skill-set-bar pyImg"></div>
                  </div>
                </li>
                <li style={{ marginTop: "40px" }}>
                  <div className="skill-set-icon">
                    <img src={javaIcon} alt="" />
                  </div>
                  <div className="skill-set-detail">
                    <div
                      className="skill-set-meta"
                      style={{ marginTop: "-5rem" }}
                    >
                      <div className="skill-set-name">
                        <h4>Java</h4>
                        <p>3 years</p>
                      </div>
                      <p className="skill-set-title">
                        70{" "}
                        <span
                          className="skill-set-percent"
                          style={{ color: "#072142" }}
                        >
                          %
                        </span>{" "}
                      </p>
                    </div>
                    <div className="skill-set-bar javaImg"></div>
                  </div>
                </li>
              </ul>

              <ul>
                <li>
                  <div className="skill-set-icon">
                    <img src={htmlcss} alt="" />
                  </div>
                  <div className="skill-set-detail">
                    <div className="skill-set-meta">
                      <div className="skill-set-name">
                        <h4>HTML/CSS</h4>
                        <p>2 years</p>
                      </div>
                      <p className="skill-set-title">
                        90{" "}
                        <span
                          className="skill-set-percent"
                          style={{ color: "#072142" }}
                        >
                          %
                        </span>{" "}
                      </p>
                    </div>
                    <div className="skill-set-bar"></div>
                  </div>
                </li>
                <li style={{ marginTop: "35px" }}>
                  <div className="skill-set-icon">
                    <img src={jsImg} alt="" />
                  </div>
                  <div className="skill-set-detail">
                    <div
                      className="skill-set-meta"
                      style={{ marginTop: "-5rem" }}
                    >
                      <div className="skill-set-name">
                        <h4>Javascript</h4>
                        <p>2 years</p>
                      </div>
                      <p className="skill-set-title">
                        80{" "}
                        <span
                          className="skill-set-percent"
                          style={{ color: "#072142" }}
                        >
                          %
                        </span>{" "}
                      </p>
                    </div>
                    <div className="skill-set-bar CImg"></div>
                  </div>
                </li>
                <li style={{ marginTop: "40px" }}>
                  <div className="skill-set-icon">
                    <img src={mysqlIcon} alt="" />
                  </div>
                  <div className="skill-set-detail">
                    <div
                      className="skill-set-meta"
                      style={{ marginTop: "-5rem" }}
                    >
                      <div className="skill-set-name">
                        <h4>MySQL</h4>
                        <p>1 year</p>
                      </div>
                      <p className="skill-set-title">
                        80{" "}
                        <span
                          className="skill-set-percent"
                          style={{ color: "#072142" }}
                        >
                          %
                        </span>{" "}
                      </p>
                    </div>
                    <div className="skill-set-bar CImg"></div>
                  </div>
                </li>
                <li style={{ marginTop: "40px" }}>
                  <div className="skill-set-icon">
                    <img src={tailwindIcon} alt="" />
                  </div>
                  <div className="skill-set-detail">
                    <div
                      className="skill-set-meta"
                      style={{ marginTop: "-5rem" }}
                    >
                      <div className="skill-set-name">
                        <h4>Tailwind CSS</h4>
                        <p>1 year</p>
                      </div>
                      <p className="skill-set-title">
                        80{" "}
                        <span
                          className="skill-set-percent"
                          style={{ color: "#072142" }}
                        >
                          %
                        </span>{" "}
                      </p>
                    </div>
                    <div className="skill-set-bar pyImg"></div>
                  </div>
                </li>
                <li style={{ marginTop: "45px" }}>
                  <div className="skill-set-icon">
                    <img src={RIcon} alt="" />
                  </div>
                  <div className="skill-set-detail">
                    <div
                      className="skill-set-meta"
                      style={{ marginTop: "-5rem" }}
                    >
                      <div className="skill-set-name">
                        <h4>R</h4>
                        <p>1 year</p>
                      </div>
                      <p className="skill-set-title">
                        70{" "}
                        <span
                          className="skill-set-percent"
                          style={{ color: "#072142" }}
                        >
                          %
                        </span>{" "}
                      </p>
                    </div>
                    <div className="skill-set-bar javaImg"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <a href="iamronnie847@gmail.com">iamronnie847@gmail.com</a>
            <a
              href="https://github.com/Midas847"
              style={{ marginTop: "200px", marginLeft: "680px" }}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </MouseParallaxContainer>
  );
}

export default AboutMeDesc;
