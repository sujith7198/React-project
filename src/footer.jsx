import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiLocationOn } from "react-icons/ci";
import { FaMobileScreen } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

function FOOTER(){
    return(<>
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Container style={{  padding: "20px 0" }}>
          <Row style={{ color: "white" }}>
            <Col style={{ marginRight: '20px' }}>
              <Row><h3>About</h3></Row>
              <Row>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</Row>
            </Col>
            <Col style={{ marginLeft: '20px', marginRight: '20px' }}>
              <Row><h3>Menu</h3></Row>
              <Row>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="/gallery" style={{ textDecoration: 'none', color: 'inherit' }}>Gallery</a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</a>
                  </li>
                </ul>
              </Row>
            </Col>

            <Col>
              <Row><h3>Useful Link</h3></Row>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>Adipiscing </li>
                <li>Elit, sed do</li>
                <li>Eiusmod </li>
                <li>Tempor </li>
                <li>incididunt</li>
              </ul>
            </Col>
            <Col>
              <Row>
                <h3>Contact Us</h3>
              </Row>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <CiLocationOn style={{ marginRight: '8px' }} />
                  Address: Loram Ipusm
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <FaMobileScreen style={{ marginRight: '8px' }} />
                  Call: +01 1234567890
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <CiMail style={{ marginRight: '8px' }} />
                  Email: mail@domain.com
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>)
}
export default FOOTER;
