import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { cardData } from './Data';
import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal({ show, onHide, itemId, to, children }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const selectedItem = cardData.find((item) => item.id === itemId);

  if (!selectedItem) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <Row key={selectedItem.id}>
          <Col>
            <Carousel
              activeIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
              data-bs-theme="dark"
            >
              {selectedItem.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          <Col>
            <h2>{selectedItem.title}</h2>
            <h3>{selectedItem.price}</h3>
            <p>
              <span style={{ fontWeight: 'bold', fontSize: '25px', color: '#AF8A64' }}>Rs:900</span>
            </p>
            <p>{selectedItem.description1}</p>
            <p>Product Type: {selectedItem.ProductType}</p>
            <p>Vendor: Nescafé</p>
            <p>Coffee Sku: {selectedItem.Sku}</p>

            <div>
              <label htmlFor={`packSizes-${selectedItem.id}`} style={{ margin: '10px' }}>
                Pack Sizes:
              </label>
              <select
                id={`packSizes-${selectedItem.id}`}
                style={{
                  width: '200px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  paddingLeft: '20px',
                }}
              >
                <option value="option1">350ML</option>
                <option value="option2">650ML</option>
                <option value="option3">950ML</option>
              </select>
            </div>

            <div>
              <label htmlFor={`sizes-${selectedItem.id}`} style={{ margin: '10px' }}>
                Sizes:
              </label>
              <select
                id={`sizes-${selectedItem.id}`}
                style={{
                  width: '80px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  paddingLeft: '20px',
                }}
              >
                <option value="option1">S</option>
                <option value="option2">M</option>
                <option value="option3">L</option>
              </select>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor={`quantity-${selectedItem.id}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${selectedItem.id}`}
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <Button
              as={Link}
              to={to}
              style={{
                marginRight: '10px',
                backgroundColor: isHovered ? '#5F3E2E' : '#AF8A64',
                color: 'white',
                border: 'none',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Add To Cart
              {children}
            </Button>
          </Col>
        </Row>
        <Row>
          {selectedItem.images.map((image, index) => (
            <Col key={index} xs={6} md={2}>
              <Image
                style={{ height: "100px", width: "60%" }}
                src={image}
                rounded
                onClick={() => handleThumbnailClick(index)}
              />
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
