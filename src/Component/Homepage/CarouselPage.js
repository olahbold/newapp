import React from 'react';
import   {Carousel,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import { Container } from 'react-bootstrap';



export default function Homepage() {
  return (
<Container fluid>
  <Row >
    <Col>
      <Carousel>
        <Carousel.Item>
    
            <Image
              src= "/Pictures/backgroundimages.jpeg"
              alt="First slide"
              className="Imageedit"
             />
      
            
  
      </Carousel.Item>
      <Carousel.Item>
   
            <Image
            src="/Pictures/backgroundimages2.jpeg"
            alt="Third slide"
            className="Imageedit"
            />  
    

    
  </Carousel.Item>
  <Carousel.Item>
    <Image
      src= "/Pictures/program.jpg" 
      alt="Third slide"
      className="Imageedit"
    />

    
  </Carousel.Item>
</Carousel>
</Col>

    </Row>         
    </Container>
  )
}

