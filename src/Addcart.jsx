
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import { CiCreditCard1 , CiBank,CiMoneyBill } from "react-icons/ci";
import pop from './img/img-1.png';
import Image from 'react-bootstrap/Image';
import { Card } from 'react-bootstrap';
import { RiDeleteBin6Line } from "react-icons/ri";

function ADDCART(){
    const [validated, setValidated] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const [cardCounts, setCardCounts] = useState({});
    const handleButtonClick = (buttonName) => {
      setSelectedButton(buttonName);
    };
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
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
  
    
    return(<>
    

    <Container>
    <label style={{ fontWeight: 'bold', paddingTop:"5px" }}>Complete seu pedido</label>
        <Row >
          <Col style={{backgroundColor:"#F3F2F2", borderRadius:'10px',margin:'20px' ,padding:"20px"  }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <div style={{padding:'10px'}}> <Row><Col className='d-flex'>
                <div style={{marginRight:"5px", }}> <CiLocationOn style={{ color: "brown" }}  /></div>
            <div>
            <p style={{ margin: 0 }}>Endereço de Entrega,</p>
            <p style={{ margin: 0 }}>Endereço de Entrega</p></div></Col></Row>
                </div>
      <Row className="my-3" >
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom03">
         
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="3" controlId="validationCustom04">
         
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom03">
         
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid ci.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="3" controlId="validationCustom04">
          
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
         
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </Form>
            </Col>
          <Col style={{backgroundColor:"#F3F2F2", margin:'20px',borderRadius: "10px 30px 10px 30px"}}>
             <div>
                <Row style={{padding:"10px"}}>
                <Col  sm={1} xs={1} md={3}  >
         <Image src={pop} roundedCircle style={{ width: '80px' }} />
             </Col>
                    <Col sm={5}> 
                    <p>Expresso Americano</p>
                    <Row>
  <Col sm={5} >
    <div className="counter" style={{ backgroundColor: "#E6E5E5", borderRadius: "10px", padding: "2px", display: "inline-flex", alignItems: "center", height: "34px" }}>
      <button className="decrement" style={{ backgroundColor: "#E6E5E5", padding: "1px", borderRadius: "50%", marginRight: "0px" }} onClick={() => decrement('pop')}> - </button>
      <div className="value" style={{ padding: "5px", borderRadius: "10px", margin: "0 5px" }}>{cardCounts['pop'] || 0}</div>
      <button className="increment" style={{ backgroundColor: "#E6E5E5", padding: "1px", borderRadius: "50%", marginLeft: "0px" }} onClick={() => increment('pop')}> + </button>
    </div>
  </Col >
  <Col  sm={5}>
    <button style={{ borderRadius: "10px", display: "flex", alignItems: "center" }}>
      <RiDeleteBin6Line style={{ marginRight: "2px" }} />REMOVE
    </button>
  </Col>
</Row>
        </Col>
           <Col sm={3}><p>R$29,70</p></Col>
                </Row>
                <Row>
  <Col sm={8}>
    <ul style={{ listStyleType: 'none' }}>
      <li>Total de itens</li>
      <li>Entrega</li>
      <li style={{ fontWeight: 'bold' }}>Total</li>
    </ul>
  </Col>
  <Col>
    <ul style={{ listStyleType: 'none' }}>
      <li>RS:</li>
      <li>RS:</li>
      <li style={{ fontWeight: 'bold' }}>RS:</li>
    </ul>
  </Col>
</Row>
<Row  className="justify-content-md-center">
    <Button style={{ backgroundColor: "#DBAC2C", width: "50%" }}>CONFIRMAR PEDIDO</Button>
</Row>
            </div>
            </Col>
        </Row>
        <Row style={{backgroundColor:"#F3F2F2", margin:'20px', width:"45%", borderRadius:"10px"}}>
              <div style={{padding:'20px',}}> 
              <Row>
                <Col className='d-flex'>
                <div style={{marginRight:"5px"}}> <FaDollarSign  style={{ color: "blue" }} /></div>
            <div >
            <p style={{ margin: 0  , fontSize:"20px"}}>Pagamento,</p>
            <p style={{ margin: 0 }}>Pagamento</p></div>
            </Col>
            </Row>
                </div>
                <div className="d-flex justify-content-around" style={{ padding: '25px' }}>
            <button
              style={{
                borderRadius: '5px',
                padding: '5px',
                width: '140px',
                border: selectedButton === 'CREDIT' ? '2px solid lightblue' : '2px solid transparent',
              }}
              onClick={() => handleButtonClick('CREDIT')}
            >
              <CiCreditCard1 style={{ marginRight: '20px' }} />
              CREDIT
            </button>

            <button
              style={{
                borderRadius: '5px',
                padding: '5px',
                width: '140px',
                border: selectedButton === 'DEBITO' ? '2px solid lightblue' : '2px solid transparent',
              }}
              onClick={() => handleButtonClick('DEBITO')}
            >
              <CiBank style={{ marginRight: '20px' }} />
              DEBITO
            </button>
            <button
              style={{
                borderRadius: '5px',
                padding: '5px',
                width: '140px',
                border: selectedButton === 'DINHEIRO' ? '2px solid lightblue' : '2px solid transparent',
              }}
              onClick={() => handleButtonClick('DINHEIRO')}
            >
              <CiMoneyBill style={{ marginRight: '20px' }} />
              DINHEIRO
            </button>
          </div>
                </Row>
      </Container></>)
}
export default ADDCART