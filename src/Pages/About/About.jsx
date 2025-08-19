import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <section className="about-hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              <h1>About Mustard Seed Private School</h1>
              <p className="lead">
                Founded in 2005, Mustard Seed Private School has been dedicated
                to providing exceptional education that prepares students for
                success in a rapidly changing world.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="School building"
                  className="img-fluid rounded"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-content">
                <h2>Our Story</h2>
                <p>
                  Mustard Seed Private School was established with a vision to
                  create a learning environment where students could thrive
                  academically, socially, and emotionally. What began as a small
                  institution with just 50 students has now grown into a
                  prestigious academy serving over 1,000 students.
                </p>
                <p>
                  Our journey has been marked by a commitment to educational
                  excellence, innovation, and the holistic development of each
                  student. We believe that education goes beyond textbooks and
                  classrooms, and we strive to instill values, critical
                  thinking, and a love for learning in all our students.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <Container>
          <Row>
            <Col md={6}>
              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>
                  To provide a stimulating learning environment that encourages
                  all students to realize their full potential, both
                  academically and personally, by inspiring a passion for
                  learning and developing the skills necessary for success in an
                  ever-changing global society.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="vision-card">
                <h3>Our Vision</h3>
                <p>
                  To be recognized as a center of excellence in education,
                  producing confident, responsible, and innovative global
                  citizens who are prepared to meet the challenges of the future
                  and make positive contributions to society.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <Container>
          <h2 className="text-center mb-5">Our Leadership Team</h2>
          <Row>
            <Col lg={4} md={6}>
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                />
                <Card.Body>
                  <Card.Title>Dr. Sarah Johnson</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Principal
                  </Card.Subtitle>
                  <Card.Text>
                    With over 20 years of experience in education, Dr. Johnson
                    leads our academy with passion and vision.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                />
                <Card.Body>
                  <Card.Title>Prof. Michael Chen</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Academic Director
                  </Card.Subtitle>
                  <Card.Text>
                    Prof. Chen oversees our curriculum development and ensures
                    the highest academic standards.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                />
                <Card.Body>
                  <Card.Title>Ms. Emily Rodriguez</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Student Affairs Director
                  </Card.Subtitle>
                  <Card.Text>
                    Ms. Rodriguez is dedicated to ensuring a supportive and
                    enriching experience for all students.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
