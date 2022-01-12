import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import Works from "./Works";
import AboutMe from "./AboutMe";
import AboutMeDesc from "./AboutMeDesc";
import Contact from "./Contact";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/aboutme" element={<AboutMeDesc />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
