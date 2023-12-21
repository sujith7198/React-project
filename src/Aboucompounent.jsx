import { Container } from "react-bootstrap"
import pop from'./img/back-1.webp';


function ABOUT(){
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
    <><div style={backgroundImageStyle}>
    <h2 style={overlayTextStyle}>About Us</h2>
  </div>
    <div><Container>
        <h5 style={{paddingBottom:"20px",paddingTop:"20px"}}>Our company</h5>
        <p style={{paddingBottom:"40px"}}>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <h5 style={{paddingBottom:"10px"}}>Our team</h5>
        <p style={{paddingBottom:"40px"}}>Lorem set sint occaecat cupidatat non,Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <h5 style={{paddingBottom:"10px"}}>Testimonials</h5>
       <p style={{paddingBottom:"40px"}}>“Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.”

         “Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.”</p>
         </Container> </div></>
    )
}
export default ABOUT