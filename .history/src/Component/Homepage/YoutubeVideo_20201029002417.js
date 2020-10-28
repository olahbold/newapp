import React from 'react';
import { Row } from 'react-bootstrap';
import { Container,Col} from 'react-bootstrap';

export default function YoutubeLinks() {
  return (
<Container fluid>
    
<Row>


  <Col>
<div>


<iframe width="560" height="315" src="" frameborder="0" 
allow="accelerometer;
 autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowfullscreen   title = ' web content'></iframe>
</div>

   


<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="" allowfullscreen></iframe>
</div>
  </Col>  
</Row>
</Container>


   
  );
}
