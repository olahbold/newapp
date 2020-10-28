import React from 'react';
import   {Carousel,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
//import Button from 'react-bootstrap/Button'
//import { Containerfluid } from 'react-bootstrap';



export default function Homepage() {
  return (
    <Containerfluid>

  <Row >
    <Col>
      <Carousel>
        <Carousel.Item>
    <a href  ='https://youtube.com/channel/UCWw5N_GxgeF7IfNWqmJ4tKQ'>
        <Image
              src= "/Pictures/program.jpg"
              alt="First slide"
              className="Imageedit"
              />
            </a>
      
            
  
      </Carousel.Item>
      <Carousel.Item>
    <a href  ='https://youtube.com/channel/UCWw5N_GxgeF7IfNWqmJ4tKQ'>
            <Image
            src="/Pictures/youtubr.jpeg"
            alt="Third slide"
            className="Imageedit"
            />  
    </a>

    
  </Carousel.Item>
  <Carousel.Item>
  <a href  ='https://facebook.com/gabriel.adeyeye.984'>
    <Image
      src= "/Pictures/facebook.jpeg" 
      alt="Third slide"
      className="Imageedit"
    />
</a>
    
  </Carousel.Item>
</Carousel>
</Col>

    </Row>   

    </Containerfluid>      
  
  )
}

