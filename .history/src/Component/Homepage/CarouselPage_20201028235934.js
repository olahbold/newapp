import React from 'react';
import   {Carousel,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
//import Button from 'react-bootstrap/Button'
import { Container} from 'react-bootstrap';
import YoutubeLinks from './YoutubeVideo';



export default function Homepage() {
  return (
    <Container fluid>

  <Row >
    <Col className>
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

<Col>


<YoutubeLinks/>




</Col>

    </Row>   

    </Container >      
  
  )
}

