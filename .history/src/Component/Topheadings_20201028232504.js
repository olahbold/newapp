import React from 'react';
//import { Row } from 'react-bootstrap';
//import { Container,Col,Image } from 'react-bootstrap';
import './Homepage/Carousel.css';

export default function TopHeading(props) {
  return (
     
            <div  className = 'position-relative'>
                <img
                src = "Pictures/backgroundsPic.jpg"
                alt = "Profile Pics"
                className = 'Top position-relative'
                />
                <h1 className = '  title_text  position-absolute'>{props.title} </h1>
                </div>
    
    
  );
}
