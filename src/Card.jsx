import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaInstagram, FaFacebook } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTable } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { cardData } from "./Data";
import MyVerticallyCenteredModal from './CartComponent';
import { IoEyeSharp } from "react-icons/io5";


function CARD({ searchTerm, onCartIncrement }) {
  const [cardHover, setCardHover] = useState({});
  const [isHeartClicked, setHeartClicked] = useState(false);
  const [cardCounts, setCardCounts] = useState({});
  const [filteredCardCount, setFilteredCardCount] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  console.log(searchTerm);

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

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setFilteredCardCount(filteredCards.length);
  }, [filteredCards]);
  const iconStyle = {
    color: 'brown', 
    fontSize: '20px',
    margin:"10px" 
  };

  return (
    <>
      <div style={{ background: "white", marginTop: "20px" }}>
        <Container>
          <div style={{ background: "white" }}>
            <div style={{ marginBottom: "20px" }}>
              <h1 className='heading_1' style={{ paddingTop: "20px" }}>Nossos cafés</h1>
            </div>
            <div style={{ marginTop: "70px" }}>
              <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Row xs={1} md={2} lg={filteredCardCount > 1 ? 4 : 2} >
                  {filteredCards.map((card) => (
                    <Col xs={12}
                      md={filteredCardCount > 1 ? 6 : 12}
                      lg={filteredCardCount > 1 ? 3 : 7} key={card.id} style={{ margin: '15px 0 90px 0' }}>
                      <Card
                        className="card_width"
                        style={{
                          borderRadius: "0 40px 0px 40px",
                          backgroundColor: "#F3F2F2",
                          paddingBottom: '20px',
                          height: "95%",
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                        onMouseEnter={() => setCardHover((prevHover) => ({ ...prevHover, [card.id]: true }))}
                        onMouseLeave={() => setCardHover((prevHover) => ({ ...prevHover, [card.id]: false }))}
                      >
                        <Card.Body style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <img
                            className="image_1"
                            style={{
                              position: "absolute",
                              zIndex: "1",
                              left: "25%",
                              top: "-22%",
                              transform: "translate(-50%, -50%),",
                              transition: "transform 0.3s",
                            }}
                            src={card.image}
                            alt=""
                          />
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ backgroundColor: 'burlywood', borderRadius: '20px', padding: '6px', margin: "30px 0", textAlign: 'center' }}>
                              <Card.Text style={{ fontSize: '10px', color: "rgb(158, 89, 89)", fontWeight: 'bold' }}>{card.heading}</Card.Text>
                            </div>
                            {card.sideheading && (
                              <div style={{ backgroundColor: 'burlywood', borderRadius: '20px', padding: '6px', marginLeft: '10px' }}>
                                <Card.Text style={{ fontSize: '10px', color: 'rgb(158, 89, 89)', fontWeight: 'bold' }}>{card.sideheading}</Card.Text>
                              </div>
                            )}
                            {card.sideadd && (
                              <div style={{ backgroundColor: 'burlywood', borderRadius: '20px', padding: '6px', marginLeft: '10px' }}>
                                <Card.Text style={{ fontSize: '10px', color: 'rgb(158, 89, 89)', fontWeight: 'bold' }}>{card.sideadd}</Card.Text>
                              </div>
                            )}
                          </div>
                          <Card.Title style={{ textAlign: "center", fontWeight: 'bold' }}>{card.title}</Card.Title>
                          <Card.Text style={{ textAlign: "center", height: '80px' }}>{card.description}</Card.Text>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <Card.Text style={{ fontWeight: 'bold', fontSize: "20px" }}>
                              <span style={{ fontWeight: 'normal' }}>Rs:</span>900
                            </Card.Text>
                            <div className="counter" style={{ backgroundColor: "#E6E5E5", borderRadius: "10px", padding: "2px", display: "inline-flex", alignItems: "center", height: "34px" }}>
                              <button className="decrement" style={{ backgroundColor: "#E6E5E5", padding: "1px", borderRadius: "50%", marginRight: "1px" }} onClick={() => decrement(card.id)}> - </button>
                              <div className="value" style={{ padding: "5px", borderRadius: "10px", margin: "0 5px" }}>{cardCounts[card.id] || 0}</div>
                              <button className="increment" style={{ backgroundColor: "#E6E5E5", padding: "1px", borderRadius: "50%", marginLeft: "1px" }} onClick={() => increment(card.id)}> + </button>
                            </div>
                            <Button variant="primary" eventKey={2} style={{ backgroundColor: '#4B2995', border: "none", padding: "5px" }} onClick={onCartIncrement}>
                              <FaShoppingCart style={{ color: 'white', fontSize: "20px" }} />
                            </Button>
                          </div>
                          <div className='btn-wrapper' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='hover-btn' style={{ display: cardHover[card.id] ? 'flex' : 'none' }}>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <IoEyeSharp
                                style={iconStyle}
                                  
                                  onClick={() => {
                                    setSelectedItemId(card.id);
                                    setModalShow(true);
                                  }}
                                />
                                 <IoEyeSharp
                                style={iconStyle}
                                  
                                  onClick={() => {
                                    setSelectedItemId(card.id);
                                    setModalShow(true);
                                  }}
                                />
                                <MyVerticallyCenteredModal
                                  show={modalShow}
                                  onHide={() => setModalShow(false)}
                                  itemId={selectedItemId}
                                />
                                <a href='https://www.instagram.com/cafecoffeeday/?hl=en'><FaInstagram style={iconStyle} /></a>
                                <a href='https://www.facebook.com/cafecoffeeday/'><FaFacebook style={iconStyle} /></a>
                              </div>
                            </div>
                            <div style={{ visibility: 'hidden' }} className='hidden-btn'>
                              <BsTable />
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default CARD;
