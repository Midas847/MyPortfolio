import React, { useEffect, useState } from "react";
import "./App.css";
import "./Contact.css";
import cloud01 from "./images/cloud01.svg";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import about from "./images/sample2.jpg";
import contactImg from "./images/contact.jpg";

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
          Get In To<span className="name-span">uch</span>
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
          <a href="iamronnie847@gmail.com">iamronnie847@gmail.com</a>
        </motion.p>
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          style={{ marginTop: "760px" }}
          className="para"
        >
          <a href="iamronnie847@gmail.com">Github</a>
        </motion.p>
        <Link to="/about">
          <i className="fas fa-angle-double-up fa-lg" />
        </Link>
        <MouseParallaxContainer
          className="moon"
          containerStyles={{
            width: "100%",
            overflow: "none",
          }}
        >
          <MouseParallaxChild className="cloud01" factorX={0.04} factorY={0.06}>
            <img src={cloud01} alt="" />
          </MouseParallaxChild>
          <motion.img
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="works-img"
            src={contactImg}
            alt=""
          />
        </MouseParallaxContainer>
        <div className="nav-left">
          <span style={{ width: "25px" }} className="span1"></span>
          <motion.span
            style={{ width: "25px" }}
            className="span2"
          ></motion.span>
          <motion.span
            style={{ width: "25px" }}
            className="span3"
          ></motion.span>
          <motion.span
            initial={{ width: 25 }}
            animate={{ width: 40 }}
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
            03
          </motion.p>
        </div>
      </MouseParallaxContainer>
    </MouseParallaxContainer>
  );
}

export default AboutMe;
