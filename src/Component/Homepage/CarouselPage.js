import React from 'react';
import   {Carousel,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import { Container } from 'react-bootstrap/lib/Tab';



export default function Homepage() {
  return (
<Container>
  <Row >
    <Col xs={6} md={4}>
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
      src= "/Pictures/backgroundimages3.jpeg" 
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

