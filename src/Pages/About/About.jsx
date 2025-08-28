import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import student from "../../assets/S2.jpg";
import staff1 from "../../assets/mom.jpg";
import staff2 from "../../assets/prisca.jpg";
import staff3 from "../../assets/nancy.jpg";
import staff4 from "../../assets/chinwe.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <section className="about-hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              <h1>About Mustard Seed Private Schools</h1>
              <p className="lead">
                Founded in 2001, Mustard Seed Private Schools has been dedicated
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
                  src={student}
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
                  institution with just 5 students has now grown into a
                  prestigious academy serving over 200 students.
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
                  We are poised to create a centre for intellectual and moral
                  excellence which give these future leaders opportunity to
                  maximize their potentials through works, commitment,
                  discipline and Ulimitely the fear of God.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="vision-card">
                <h3>Our Vision</h3>
                <p>
                  To sow the seed of knowledge in our children that will produce
                  men and women that will positively affect Nigeria, Africa and
                  world at large.
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
            <Col lg={3} md={6}>
              <Card className="team-card">
                <Card.Img variant="top" src={staff1} />
                <Card.Body>
                  <Card.Title>Mrs Victoria Akinlosotu</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Proprietress
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="team-card">
                <Card.Img variant="top" src={staff2} />
                <Card.Body>
                  <Card.Title>Mrs. Priscilla Johnson</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Administrative Director
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="team-card">
                <Card.Img variant="top" src={staff3} />
                <Card.Body>
                  <Card.Title>Miss Nancy Nze</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Head of Junior Secondary School
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="team-card">
                <Card.Img variant="top" src={staff4} />
                <Card.Body>
                  <Card.Title>Mrs. Chinwe Madukoma</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Head of Primary Section
                  </Card.Subtitle>
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
