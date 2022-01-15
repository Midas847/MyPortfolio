import React, { useEffect, useState } from "react";
import "./App.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./mainpage.css";
import cloud1 from "./images/cloud1.svg";
import cloud02 from "./images/cloud02.svg";
import cloud2 from "./images/cloud2.svg";
import moon from "./images/moon.svg";
import cloud3 from "./images/cloud3.svg";
import cloud01 from "./images/cloud01.svg";
import cloudbg from "./images/moonlight.svg";
import star from "./images/star.svg";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Navbar from "./Navbar";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);

  return (
    <MouseParallaxContainer className="App">
      {loading ? (
        <ClimbingBoxLoader size={20} color={"#F37A24"} loading={loading} />
      ) : (
        <MouseParallaxContainer
          className="main-page"
          containerStyles={{
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
            SASWATA
          </motion.h1>
          <motion.h1
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="heading2"
          >
            GHOSH
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
            web developer
          </motion.p>
          <Link to="/works">
            <p className="scrolldown">CLICK ME</p>
          </Link>
          <span className="verticaline"></span>
          <MouseParallaxContainer
            className="moon"
            containerStyles={{
              overflow: "none",
            }}
          >
            <MouseParallaxChild
              className="moon_text"
              factorX={0.01}
              factorY={0.01}
            >
              <motion.p
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
              >
                PORTFOLIO
              </motion.p>
            </MouseParallaxChild>
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
            <MouseParallaxChild
              className="moon_img"
              factorX={0.03}
              factorY={0.05}
            >
              <motion.img
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7 }}
                src={moon}
                alt=""
              />
            </MouseParallaxChild>
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
            <MouseParallaxChild
              className="cloud01"
              factorX={0.04}
              factorY={0.06}
            >
              <motion.img
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
                src={cloud01}
                alt=""
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              className="cloud02"
              factorX={0.03}
              factorY={0.05}
            >
              <motion.img
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                src={cloud02}
                alt=""
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              className="cloud_front1"
              factorX={0.04}
              factorY={0.07}
            >
              <motion.img
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7 }}
                src={cloud1}
                alt="cloud1"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              className="cloud3"
              factorX={0.03}
              factorY={0.05}
            >
              <motion.img
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                src={cloud3}
                alt=""
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              className="cloud2"
              factorX={0.06}
              factorY={0.05}
            >
              <motion.img
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                src={cloud2}
                alt="cloud2"
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <div className="nav-left">
            <motion.span
              initial={{ width: 25 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.2 }}
              style={{ width: "40px" }}
              className="span1"
            ></motion.span>
            <span style={{ width: "25px" }} className="span2"></span>
            <span style={{ width: "25px" }} className="span3"></span>
            <span style={{ width: "25px" }} className="span4"></span>
          </div>
        </MouseParallaxContainer>
      )}
    </MouseParallaxContainer>
  );
}

export default Home;
