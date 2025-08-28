import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/Mustardseedlogo.jpg";
import "./Navbar.css";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="mustardseed-logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <strong>Mustard Seed Private Schools</strong>
        </Navbar.Brand>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
