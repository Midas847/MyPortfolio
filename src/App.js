import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Home from "./Home";
import Works from "./Works";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import Navbar from "./Navbar";
import SlideRoutes from "react-slide-routes";

import SwiperCore, {
  Mousewheel,
  Keyboard,
  Pagination,
  Navigation,
} from "swiper";

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

document.addEventListener("scroll", () => {
  console.log("scrolled");
});

export default function App() {
  /*return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        hashNavigation={true}
        className="mySwiper"
      >
        <SwiperSlide href="/">
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <Works />
        </SwiperSlide>
        <SwiperSlide data-history="slide3">Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );*/
  return <></>;
}
