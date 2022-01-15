import React, { useEffect, useState } from "react";
import "./App.css";
import "./AboutMe.css";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import cloudbg from "./images/moonlight.svg";
import star from "./images/star.svg";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import about from "./images/sample2.jpg";

function AboutMe() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
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
    <MouseParallaxContainer className="App">
      <MouseParallaxContainer
        className="main-page"
        containerStyles={{
          width: "100%",
          overflow: "none",
        }}
      >
        <Navbar />

        <motion.h1
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="heading"
        >
          About<span className="name-span"> Me</span>
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
          transition={{ duration: 1 }}
          className="para"
        >
          I love Design and Technology
        </motion.p>
        <Link to="/contact">
          <p className="scrolldown">CLICK ME</p>
        </Link>
        <span className="verticaline"></span>
        <MouseParallaxContainer
          className="moon"
          containerStyles={{
            width: "100%",
            overflow: "none",
          }}
        >
          <Link
            to="/works"
            style={{ marginTop: "-170px", marginLeft: "550px" }}
          >
            <i className="fas fa-angle-double-up fa-lg" />
          </Link>
          <MouseParallaxChild
            className="moon_cloud"
            factorX={0.03}
            factorY={0.05}
          >
            <motion.img
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7 }}
              src={cloudbg}
              alt=""
            />
          </MouseParallaxChild>
          <motion.img
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="works-img2"
            src={about}
            alt=""
          />
        </MouseParallaxContainer>
        <MouseParallaxChild className="star" factorX={0.03} factorY={0.05}>
          <motion.img
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            src={star}
            alt=""
          />
        </MouseParallaxChild>
        <div className="nav-left">
          <span style={{ width: "25px" }} className="span1"></span>
          <motion.span
            style={{ width: "25px" }}
            className="span2"
          ></motion.span>
          <motion.span
            initial={{ width: 25 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.2 }}
            style={{ width: "25px" }}
            className="span3"
          ></motion.span>
          <span style={{ width: "25px" }} className="span4"></span>
        </div>
        <div className="page-number1">
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
        style={{ marginTop: "580px" }}
      >
        Show me more
      </motion.a>
    </MouseParallaxContainer>
  );
}

export default AboutMe;
