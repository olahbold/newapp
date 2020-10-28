import React from 'react';
//import { Row } from 'react-bootstrap';
//import { Container,Col,Image } from 'react-bootstrap';

export default function TopHeading(props) {
  return (
     
            <div>
                <img
                src = "Pictures/backgroundsPic.jpg"
                alt = "Profile Pics"
                className = ''
                />
                <h1 className = 'title'>{props.title} </h1>
                </div>
    
    
  );
}
