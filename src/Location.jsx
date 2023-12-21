import Button from 'react-bootstrap/Button';
import {  Card, Container } from 'react-bootstrap';
import pop1 from './img/img-2.png';
import { blog } from "./Data";
import pop from'./img/back-1.webp';

function Location(){
    const backgroundImageStyle = {
        backgroundImage: `url(${pop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "50px",
        textAlign: "center",
        color: "black", 
        position: "relative", 
      };
    
      const overlayTextStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      };
    return(
        <div>
        <div style={backgroundImageStyle}>
    <h2 style={overlayTextStyle}>News</h2>
  </div><Container>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {blog.map((item) => (
            <Card key={item.id} style={{ width: '20rem', margin: '10px' }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description1}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div></Container>
      </div>)
}
export default Location