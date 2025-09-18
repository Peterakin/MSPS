import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import image1 from "../../assets/cultural1.jpg";
import image2 from "../../assets/cultural2.jpg";
import image3 from "../../assets/cultural3.jpg";
import image4 from "../../assets/excursion1.jpg";
import image5 from "../../assets/excursion2.jpg";
import image6 from "../../assets/excursion3.jpg";
import image7 from "../../assets/parents1.jpg";
import image8 from "../../assets/parents2.jpg";
import image9 from "../../assets/graduation1.jpg";
import image10 from "../../assets/staff1.jpg";
import image11 from "../../assets/art1.jpg";
import image12 from "../../assets/science1.jpg";
import "./Gallery.css";

const Gallery = () => {
  // Categories for filtering
  const categories = ["All", "Academic", "Arts", "Events", "Field Trips"];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery items with sample images
  const galleryItems = [
    {
      id: 1,
      title: "Science Fair 2025",
      category: "Academic",
      description: "Students showcasing their innovative science projects.",
      image: image1,
    },
    {
      id: 2,
      title: "Annual Sports Day",
      category: "Sports",
      description: "Students participating in various athletic competitions.",
      image: image2,
    },
    {
      id: 3,
      title: "Art Exhibition",
      category: "Arts",
      description: "Showcasing creative artwork by our talented students.",
      image: image3,
    },
    {
      id: 4,
      title: "Graduation Ceremony",
      category: "Events",
      description: "Celebrating our graduating class of 2025.",
      image: image4,
    },
    {
      id: 5,
      title: "Museum Field Trip",
      category: "Field Trips",
      description: "Students exploring the Natural History Museum.",
      image: image5,
    },
    {
      id: 6,
      title: "Debate Competition",
      category: "Academic",
      description: "Students showcasing their public speaking skills.",
      image: image6,
    },
    {
      id: 7,
      title: "Basketball Tournament",
      category: "Sports",
      description: "Our school team competing in the regional championship.",
      image: image7,
    },
    {
      id: 8,
      title: "Music Concert",
      category: "Arts",
      description: "Annual music performance by our talented students.",
      image: image8,
    },
    {
      id: 9,
      title: "Parents Day",
      category: "Events",
      description: "Annual gathering of parents and teachers.",
      image: image9,
    },
    {
      id: 10,
      title: "Botanical Garden Visit",
      category: "Field Trips",
      description: "Learning about plant biodiversity and conservation.",
      image: image10,
    },
    {
      id: 11,
      title: "Robotics Workshop",
      category: "Academic",
      description: "Students learning about robotics and automation.",
      image: image11,
    },
    {
      id: 12,
      title: "Cultural Day",
      category: "Events",
      description: "Celebrating diversity and cultural heritage.",
      image: image12,
    },
  ];

  // Filter gallery items based on active filter
  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Handle image click to open modal
  const handleImageClick = (item) => {
    setSelectedImage(item);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      {/* Gallery Hero Section */}
      <section className="gallery-hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              <h1>Our School Gallery</h1>
              <p className="lead">
                Explore the vibrant life at Mustard Seed Private School through
                our collection of photos showcasing academic achievements,
                sports events, artistic performances, and more.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Filter Section */}
      <section className="gallery-filter-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="filter-buttons">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={
                      activeFilter === category ? "primary" : "outline-primary"
                    }
                    onClick={() => setActiveFilter(category)}
                    className="filter-btn"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-grid-section">
        <Container>
          <Row>
            {filteredItems.map((item) => (
              <Col
                lg={4}
                md={6}
                sm={12}
                key={item.id}
                className="gallery-item-col"
              >
                <Card
                  className="gallery-card"
                  onClick={() => handleImageClick(item)}
                >
                  <div className="gallery-image-container">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="gallery-image"
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-content">
                        <h5>{item.title}</h5>
                        <p>{item.category}</p>
                      </div>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {item.date}
                    </Card.Subtitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Image Modal */}
      {showModal && selectedImage && (
        <div className="gallery-modal" onClick={handleCloseModal}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="gallery-modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="gallery-modal-image"
            />
            <div className="gallery-modal-info">
              <h3>{selectedImage.title}</h3>
              <p className="gallery-modal-category">{selectedImage.category}</p>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
