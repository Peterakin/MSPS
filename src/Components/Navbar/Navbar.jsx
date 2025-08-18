import React, { useState } from "react";
import "./Navbar.css";
import { TiTimes } from "react-icons/ti";
import { CgMenuMotion } from "react-icons/cg";
import { Link } from "react-router-dom";
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="contact">Contact US</Link>
            </li>
          </ul>
        </div>
        <div className="nav_btn">
          <button>Contact</button>
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
