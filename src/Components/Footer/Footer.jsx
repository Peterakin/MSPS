import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Mustard Seed Private School</h5>
            <p>Empowering minds, shaping futures.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <p>
              123 Education Street
              <br />
              Learning City, ED 12345
            </p>
            <p>
              Email: info@brightfutureacademy.edu
              <br />
              Phone: (123) 456-7890
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>
              &copy; {currentYear} Mustard Seed Private School. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
