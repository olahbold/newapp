import React from 'react';
import { Row } from 'react-bootstrap';
import { Container,Col,Image } from 'react-bootstrap';

export default function TopHeading(props) {
  return (
      <Container fluid>
            <Row>
            <Col>
                <Image 
                src = "public/Pictures\backgroundsPic.jpg"
                alt = "Profile Pics"
                className = 'w-100 h-50 '
                />
                <h1 className = 'title'>{props.title} </h1>

            </Col>
            </Row>
      </Container>
    
  );
}
