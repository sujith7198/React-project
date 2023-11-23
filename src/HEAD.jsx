import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pop from './img/pop1.png'

function HEAD(){
    return( <Container>
        <Row>
          <Col>
          <Row>Encontre o café perfeito para qualquer hora do dia</Row>
          <Row>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</Row>
          <Row></Row>
          </Col>
          <Col>src={pop}</Col>
        </Row>
      </Container>)
}
export default HEAD