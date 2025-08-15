import React from "react";
import "./Footer.css";
import logo from "../../assets/Mustardseedlogo.jpg";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="logo">
          <img src={logo} alt="Mustard Seed Logo" className="footer-logo" />
          <h2>Mustard Seed Private School</h2>
        </div>
        <div className="footer-contact">
          <p>
            <FaMapMarkerAlt /> Plot 1457, Cadastral Zone B8, Jahi District, FCT
            - Abuja
          </p>
          <p>
            <FaEnvelope /> mustardseedabuja@yahoo.com
          </p>
          <p>
            <FaPhoneAlt /> +234 903 8882 824, +234 903 8882 823
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <div className="footer-column">
          <h4>OUR SCHOOL</h4>
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
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Mustard Seed ICT Team. All rights reserved.</p>
        <div className="footer-socials">
          <FaFacebookF />
          <FaGooglePlusG />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
