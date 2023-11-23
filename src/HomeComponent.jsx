import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pop1 from './img/pop1.png';
import { BiPackage } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { ImStopwatch } from 'react-icons/im';
import { PiCoffeeBold } from 'react-icons/pi';
import CARD from './Card';

function HomeComponent({ searchTerm }) {

  return (
    <div className='BODY-1' style={{ backgroundColor: 'rgb(244, 240, 240)' }}>
      <Container className='ALL-1'>
        <Row className="mb-6">
          <Col xs={12} md={6} className='OK'>
            <Row className="fon mb-5" style={{ fontWeight: 800, fontSize: "55px" ,fontFamily: "Baloo 2, sans-serif" }}>
              Encontre o café perfeito para qualquer hora do dia
            </Row>
            <Row className="mb-5" style={{ fontSize: "20px" }}>
              Com o Coffee Delivery, você recebe seu café onde estiver, a qualquer hora
            </Row>
            <Row className="mb-3">
              <Row>
                <Col className="d-flex align-items-center">
                  <div className="circle-background" style={{ backgroundColor: 'rgb(196, 127, 23)' }}>
                    <FaShoppingCart className="ICON-1" style={{ color: 'white' }} />
                  </div>
                  <span className="small-text" style={{ marginLeft: '10px' }}>Compra simples e segura</span>
                </Col>
                <Col className="d-flex align-items-center">
                  <div className="circle-background" style={{ backgroundColor: '#DBAC2C' }}>
                    <ImStopwatch className="ICON-1" style={{ color: 'white' }} />
                  </div>
                  <span className="small-text" style={{ marginLeft: '10px' }}>Entrega rápida e rastreada</span>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className="d-flex align-items-center">
                  <div className="circle-background" style={{ backgroundColor: '#574f4D' }}>
                    <BiPackage className="ICON-1" style={{ color: 'white' }} />
                  </div>
                  <span className="small-text" style={{ marginLeft: '10px' }}>Embalagem mantém o café intacto</span>
                </Col>
                <Col className="d-flex align-items-center">
                  <div className="circle-background" style={{ backgroundColor: '#8047F8' }}>
                    <PiCoffeeBold className="ICON-1" style={{ color: 'white' }} />
                  </div>
                  <span className="small-text" style={{ marginLeft: '10px' }}>O café chega fresquinho até você</span>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col xs={12} md={6} className='img_a'>
            <div className='img_1 d-flex justify-content-center'>
              <img src={pop1} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </Col>
        </Row>
      </Container>
      <CARD searchTerm={searchTerm} />
    </div>
  
  );
}

export default HomeComponent;
