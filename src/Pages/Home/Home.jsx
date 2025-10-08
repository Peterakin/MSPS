import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import student from "../../assets/S1.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <h1>Welcome to Mustard Seed Private Schools</h1>
              <p className="lead">
                Where education meets innovation. We nurture young minds to
                become tomorrow's leaders.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg">
                  <Link className="learn-more" to="/about">
                    Learn More
                  </Link>
                </Button>
                <Button variant="outline-primary" size="lg">
                  <Link className="contact" to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image">
              {/* Placeholder for hero image */}
              <div className="image-placeholder">
                <img
                  src={student}
                  alt="Students learning"
                  className="img-fluid rounded"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <h2 className="text-center mb-5">Why Choose Us</h2>
          <Row>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">📚</div>
                  <Card.Title>Excellence in Education</Card.Title>
                  <Card.Text>
                    Our curriculum is designed to challenge and inspire students
                    to reach their full potential.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">🧠</div>
                  <Card.Title>Innovative Learning</Card.Title>
                  <Card.Text>
                    We incorporate the latest teaching methodologies and
                    technologies to enhance the learning experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">🌍</div>
                  <Card.Title>Global Perspective</Card.Title>
                  <Card.Text>
                    Our programs prepare students to thrive in an increasingly
                    interconnected world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h2>Ready to Join Our Community?</h2>
              <p className="lead">
                Take the first step towards a brighter future for your child.
              </p>
              <Button variant="primary" size="lg">
                <Link className="contact" to="/contact">
                  Contact Us Today
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
