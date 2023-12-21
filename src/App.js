import logo from './logo.svg';
import './App.css';
import NAVBAR from './NAVBAR';
import { GoPerson } from "react-icons/go";
import React,{useState} from 'react';
import HEAD from './HEAD';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { BiSearchAlt } from 'react-icons/bi';
import Form from 'react-bootstrap/Form';
import pop from './img/logo.svg'
import {  Button } from 'react-bootstrap';
import { Routes, Route,Navigate,useNavigate  } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import { Link } from 'react-router-dom';
import CartComponent from './CartComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ABOUT from './Aboucompounent';
import CARD from './Card';
import CardComponent from './Obj';
import LOGIN from './Loginpage';
import Location from './Location';
import FOOTER from './footer';
import Badge from 'react-bootstrap/Badge';
import cardData from "./Data";
import Registration from './Loginpage';
import ADDCART from './Addcart';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);


  const handleLogin = () => {
    setIsLoggedIn(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(true);
  };

  const handleCartIncrement = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleRegistrationComplete = (status) => {
    setIsRegistrationComplete(status);
  };

  


  return (
    <>
    <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary py-4">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <div className='banner'><img className='img-fluid' src={pop} alt="" /></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form>
            <div className="input-group">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Search" 
                style={{ width: '580px', height: '38px', fontSize: '13px' }} 
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}                
              />
            </div>
          </Form>
          <div className="BUTTEN">
            <Button
              as={Link}
              to="/about"
              style={{
                marginRight: '5px',
                backgroundColor: '#F1E9C9',
                color: 'blue',
                border: 'none',
              }}
            >
              About
            </Button>

            <Button
              as={Link}
              to="/deets"
              variant="primary"
              style={{
                marginRight: '5px',
                backgroundColor: '#EBE5F9',
                color: '#4b2995',
                border: 'none',
              }}
            >
              <ImLocation style={{ marginRight: '5px', color: '#4b2995', fontSize: '20px' }} />
              Fortaleza, CE
            </Button>
            <Button
  as={Link}
  to="/memes"
  variant="primary"
  style={{ backgroundColor: '#F1E9C9', border: 'none', margin: 'auto' }}
  onClick={handleCartIncrement}
>
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <FaShoppingCart style={{ color: 'rgb(196, 127, 23)', fontSize: '20px' }} />
    {cartCount > 0 && (
      <span style={{ position: 'absolute', top: -18, left: 21, backgroundColor: 'rgb(196, 127, 23)', borderRadius: '50%', padding: '4px', width: '20px', textAlign: 'center' }}>
        {cartCount}
      </span>
    )}
  </div>
</Button>
            <Button
              as={Link}
              to="/registration"
              variant="primary"
              style={{ backgroundColor: '#F1E9C9', border: 'none', margin: 'auto', marginLeft: '10px' }}
            >
              <GoPerson style={{ color: 'rgb(196, 127, 23)', fontSize: '20px' }} />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<HomeComponent searchTerm={searchTerm}/>} />
      <Route path="/home" element={<HomeComponent  searchTerm={searchTerm}/>} />
      <Route path="/deets" element={ <Location />} />
      <Route path="/memes" element={<ADDCART onCartIncrement={handleCartIncrement}/>} />
      <Route path="/about" element={<ABOUT />} />
      <Route path="/mem" element={<CardComponent />} />
        <Route path="/registration" element={<Registration  />} />
    </Routes>
  <FOOTER />
    </>
  );
}

export default App;
