import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiLocationOn } from 'react-icons/ci';
import { FaMobileScreen } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';
import pop2 from './img/ft-1.png'
import pop1 from './img/ft-2.png'


function FOOTER() {
  return (
    <>
      <div style={{ width: '100%', backgroundColor: '#AF8A64', color: 'white' }}>
      <Container style={{ padding: '20px 0' }}>
        <div style={{ backgroundColor: '#AF8A64' }}>
          <Row style={{ backgroundColor: '#AF8A64' }}>
            <Col style={{ borderRight: '3px solid gray', height:"30px", paddingRight: '120px' }}>
              <h5 style={{ textAlign: 'center' }}> Our Address</h5>
              <p style={{ textAlign: 'center' }}>12 Loram Ipusm, Australiya </p>
            </Col>
            <Col style={{ borderRight: '3px solid gray' , height:"30px", paddingRight: '120px' }}>
              <h5 style={{ textAlign: 'center' }}>Call us free</h5>
              <p style={{ textAlign: 'center' }}> +01 1234567890/098234555</p>
            </Col>
            <Col>
              <h5 style={{ textAlign: 'center' }}>Send Email now</h5>
              <p style={{ textAlign: 'center' }}>information@company.com</p>
            </Col>
          </Row>
        </div></Container>
    </div>
        <div style={{backgroundColor:"#411B1C", color:"white"}}><Container>
        <Row >
          <Col style={{ borderRight: '2px solid gray', height:"20px", marginTop:"20px",paddingRight: '50px', textAlign: 'center' }}>
            <p>Search</p>
          </Col>
          <Col style={{ borderRight: '2px solid gray', height:"20px", marginTop:"20px",paddingRight: '50px', textAlign: 'center'  }}>
            <p>Sitemap</p>
          </Col>
          <Col style={{borderRight: '2px solid gray', height:"20px", marginTop:"20px",paddingRight: '50px', textAlign: 'center'  }}>
            <p>Terms</p>
          </Col>
          <Col style={{ borderRight: '2px solid gray', height:"20px", marginTop:"20px",paddingRight: '50px', textAlign: 'center'  }}>
            <p>Advance Search</p>
          </Col>
          <Col style={{ borderRight: '2px solid gray', height:"20px", marginTop:"20px",paddingRight: '50px', textAlign: 'center'  }}>
            <p>Contact us</p>
          </Col>
          <Col style={{borderRight: '2px solid gray', height:"20px", marginTop:"20px",paddingRight: '40px', textAlign: 'center'  }}>
            <p>About Us</p>
          </Col>
          <Col style={{marginTop:"20px"}}>
            <p>Privacy Policy</p>
          </Col>
        </Row>
        <Row style={{ textAlign: 'center',padding:"15px" }}>
          <p>© 2023, Cafebrew - Coffee Store (Password: Demo) Powered By Shopify</p>
        </Row>
        <Row></Row></Container></div>
      
    </>
  );
}

export default FOOTER;
