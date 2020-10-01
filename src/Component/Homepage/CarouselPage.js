import React from 'react';
import   {Carousel,Row,Col,Image} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

import FontAwesome from 'react-fontawesome'

export default function Homepage() {
  return (
<Row >
    <Col>
      <Carousel>
        <Carousel.Item>
    
            <Image
              src= "/Pictures/backgroundimages.jpeg"
              alt="First slide"
              className="Imageedit"
             />
      
            <div className = 'carousel_text'>
            <h2> JOIN US ON FACEBOOK</h2>
            <FontAwesome/>

            </div>
  
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









      







  )
}

