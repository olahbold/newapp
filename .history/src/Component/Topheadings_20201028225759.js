import React from 'react';
//import { Row } from 'react-bootstrap';
import { Container,Col,Image } from 'react-bootstrap';

export default function TopHeading(props) {
  return (
     
            <div>
                <Image 
                src = "Pictures/backgroundsPic.jpg"
                alt = "Profile Pics"
                className = 'w-100  p-3 h-25 '
                />
                <h1 className = 'title'>{props.title} </h1>
                </div>
    
    
  );
}
