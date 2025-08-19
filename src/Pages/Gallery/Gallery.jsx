import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Gallery.css";

const Gallery = () => {
  // Categories for filtering
  const categories = [
    "All",
    "Academic",
    "Sports",
    "Arts",
    "Events",
    "Field Trips",
  ];

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
      image:
        "https://images.unsplash.com/photo-1564979045531-fa386a275b27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "March 15, 2025",
    },
    {
      id: 2,
      title: "Annual Sports Day",
      category: "Sports",
      description: "Students participating in various athletic competitions.",
      image:
        "https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "February 10, 2025",
    },
    {
      id: 3,
      title: "Art Exhibition",
      category: "Arts",
      description: "Showcasing creative artwork by our talented students.",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      date: "April 5, 2025",
    },
    {
      id: 4,
      title: "Graduation Ceremony",
      category: "Events",
      description: "Celebrating our graduating class of 2025.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "June 20, 2025",
    },
    {
      id: 5,
      title: "Museum Field Trip",
      category: "Field Trips",
      description: "Students exploring the Natural History Museum.",
      image:
        "https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "May 8, 2025",
    },
    {
      id: 6,
      title: "Debate Competition",
      category: "Academic",
      description: "Students showcasing their public speaking skills.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "April 15, 2025",
    },
    {
      id: 7,
      title: "Basketball Tournament",
      category: "Sports",
      description: "Our school team competing in the regional championship.",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80",
      date: "March 22, 2025",
    },
    {
      id: 8,
      title: "Music Concert",
      category: "Arts",
      description: "Annual music performance by our talented students.",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "May 18, 2025",
    },
    {
      id: 9,
      title: "Parents Day",
      category: "Events",
      description: "Annual gathering of parents and teachers.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      date: "February 25, 2025",
    },
    {
      id: 10,
      title: "Botanical Garden Visit",
      category: "Field Trips",
      description: "Learning about plant biodiversity and conservation.",
      image:
        "https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "April 30, 2025",
    },
    {
      id: 11,
      title: "Robotics Workshop",
      category: "Academic",
      description: "Students learning about robotics and automation.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "March 5, 2025",
    },
    {
      id: 12,
      title: "Cultural Day",
      category: "Events",
      description: "Celebrating diversity and cultural heritage.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      date: "May 22, 2025",
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
              <p className="gallery-modal-category">
                {selectedImage.category} | {selectedImage.date}
              </p>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
