import React, { useState } from "react";
import "./Navbar.css";
import { TiTimes } from "react-icons/ti";
import { CgMenuMotion } from "react-icons/cg";
const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <h2>MUSTARD SEED</h2>
        </div>
        <div
          className={Mobile ? "nav-links" : "links"}
          onClick={() => setMobile(false)}
        >
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Courses</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="nav_btn">
          <button>Enroll Now</button>
        </div>
        <button className="toggle" onClick={() => setMobile(!Mobile)}>
          {Mobile ? (
            <TiTimes className="close_icon" />
          ) : (
            <CgMenuMotion className="open_icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
