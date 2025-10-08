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
      title: "Cultural Week",
      category: "Events",
      description:
        "Students and Staff showcasing their various beautiful tribes(igbo).",
      image: image1,
    },
    {
      id: 2,
      title: "Cultural Week",
      category: "Events",
      description:
        "Students and Staff showcasing their various beautiful tribes(igala).",
      image: image2,
    },
    {
      id: 3,
      title: "Cultural Week",
      category: "Events",
      description:
        "Showcasing and Staff showcasing their various beautiful tribes(tiv)",
      image: image3,
    },
    {
      id: 4,
      title: "Train station Field Trip",
      category: "Field Trips",
      description:
        "Students excursion to the train station from Abuja to Kaduna.",
      image: image4,
    },
    {
      id: 5,
      title: "Airport Field Trip",
      category: "Field Trips",
      description:
        "Students excursion to Nnamdi Azikiwe International Airport.",
      image: image5,
    },
    {
      id: 6,
      title: "Magic Land Field Trip",
      category: "Field Trips",
      description: "Students excursin to Magic Land in Abuja.",
      image: image6,
    },
    {
      id: 7,
      title: "Parents at Our End of the Year Party",
      category: "Events",
      description: "Parents and Students at our end of the year ceremony.",
      image: image7,
    },
    {
      id: 8,
      title: "Parents at Our End of the Year Party",
      category: "Events",
      description: "Parents and Students at our end of the year ceremony.",
      image: image8,
    },
    {
      id: 9,
      title: "Graduation Ceremony",
      category: "Events",
      description: "Celebrating our graduating class of 2025",
      image: image9,
    },
    {
      id: 10,
      title: "Our Beautiful Staffs",
      category: "Academic",
      description: "A picture of our beautiful and vibrant staffs.",
      image: image10,
    },
    {
      id: 11,
      title: "Vocational Skills(Tailoring)",
      category: "Art",
      description: "Students learning about tailoring and Fashion Design.",
      image: image11,
    },
    {
      id: 12,
      title: "Science Practical",
      category: "Academic",
      description: "Students taking part in science practicals.",
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
