import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import pop from './img/img-1.png';
import Container from 'react-bootstrap/Container';
import { cardData } from './Data';

function CARD() {
  const [cardCounts, setCardCounts] = useState({});

  const increment = (cardId) => {
    setCardCounts((prevCounts) => ({
      ...prevCounts,
      [cardId]: (prevCounts[cardId] || 0) + 1,
    }));
  };

  const decrement = (cardId) => {
    if (cardCounts[cardId] > 0) {
      setCardCounts((prevCounts) => ({
        ...prevCounts,
        [cardId]: prevCounts[cardId] - 1,
      }));
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <div style={{ background: 'white', padding: '40px' }}>
      <div>
        <h1 style={{ marginLeft: '60px' }}>Nossos cafés</h1>
      </div>
      <div style={{ padding: '50px' }}>
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Slider {...settings}>
            {cardData.map((card) => (
              <div key={card.id}>
                <Card className="card_width" style={{ borderRadius: '0 40px 0px 40px', backgroundColor: '#F3F2F2' }}>
                  <Card.Body>
                    <img
                      className="image_1"
                      style={{
                        position: 'absolute',
                        zIndex: '1',
                        left: '70px',
                        bottom: '230px',
                        transform: 'translate(-50%, -50%)',
                        transition: 'transform 0.3s',
                      }}
                      src={card.image}
                      alt=""
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ backgroundColor: 'burlywood', borderRadius: '20px', padding: '6px', margin: '30px 0', textAlign: 'center' }}>
                        <Card.Text style={{ fontSize: '10px', color: 'rgb(158, 89, 89)', fontWeight: 'bold' }}>TRADICIONAL</Card.Text>
                      </div>
                    </div>
                    <Card.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>{card.title}</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>{card.description}</Card.Text>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <Card.Text style={{ fontWeight: 'bold', fontSize: '25px' }}>
                        <span style={{ fontWeight: 'normal' }}>Rs:</span>900
                      </Card.Text>
                      <div className="counter" style={{ backgroundColor: '#E6E5E5', borderRadius: '10px', padding: '2px', display: 'inline-flex', alignItems: 'center', height: '40px' }}>
                        <button className="decrement" style={{ backgroundColor: '#E6E5E5', padding: '1px', borderRadius: '50%', marginRight: '1px' }} onClick={() => decrement(card.id)}>
                          {' '}
                          -{' '}
                        </button>
                        <div className="value" style={{ padding: '5px', borderRadius: '10px', margin: '0 5px' }}>
                          {cardCounts[card.id] || 0}
                        </div>
                        <button className="increment" style={{ backgroundColor: '#E6E5E5', padding: '1px', borderRadius: '50%', marginLeft: '1px' }} onClick={() => increment(card.id)}>
                          {' '}
                          +{' '}
                        </button>
                      </div>
                      <Button as={Link} to="/memes" variant="primary" eventKey={2} style={{ backgroundColor: '#4B2995', border: 'none' }}>
                        <FaShoppingCart style={{ color: 'white', fontSize: '20px' }} />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CARD;
