import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              <h1>Contact Us</h1>
              <p className="lead">
                We'd love to hear from you! Reach out with any questions about
                our programs, admissions, or to schedule a campus visit.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <Container>
          <Row>
            <Col lg={4} md={6}>
              <Card className="contact-card">
                <Card.Body>
                  <div className="contact-icon">📍</div>
                  <Card.Title>Our Location</Card.Title>
                  <Card.Text>
                    Along Gomo Palace Road
                    <br />
                    Kuja, Abuja.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="contact-card">
                <Card.Body>
                  <div className="contact-icon">📞</div>
                  <Card.Title>Phone & Email</Card.Title>
                  <Card.Text>
                    Phone: (+234) 8036906161
                    <br />
                    Phone: (+234) 8036259509
                    <br />
                    Email: mustardseedabuja@yahoo.com
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12}>
              <Card className="contact-card">
                <Card.Body>
                  <div className="contact-icon">🕒</div>
                  <Card.Title>Office Hours</Card.Title>
                  <Card.Text>
                    Monday - Friday: 7:30 AM - 3:30 PM
                    <br />
                    Saturday: Closed
                    <br />
                    Sunday: Closed
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <Container>
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <Row>
            <Col lg={6}>
              <div className="faq-item">
                <h4>What are the admission requirements?</h4>
                <p>
                  Our admission process includes an application form, previous
                  academic records, and an interview. We assess each student
                  individually to ensure they will thrive in our environment.
                </p>
              </div>
              <div className="faq-item">
                <h4>Do you offer scholarships?</h4>
                <p>Yes, we offer scholarships on compationate grounds.</p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="faq-item">
                <h4>What extracurricular activities do you offer?</h4>
                <p>
                  We offer a wide range of activities including sports, music,
                  debate, robotics, and community service programs.
                </p>
              </div>
              <div className="faq-item">
                <h4>How can I schedule a campus tour?</h4>
                <p>
                  You can schedule a campus tour by contacting the above,
                  calling our admissions office, or sending an email to visit:
                  mustardseedabuja@yahoo.com
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
