import React from 'react';
//import { Row } from 'react-bootstrap';
//import { Container,Col,Image } from 'react-bootstrap';

export default function TopHeading(props) {
  return (
     
            <div  className>
                <img
                src = "Pictures/backgroundsPic.jpg"
                alt = "Profile Pics"
                className = 'w-100  p-3 h-25  position-relative'
                />
                <h1 className = 'position-absolute'>{props.title} </h1>
                </div>
    
    
  );
}
