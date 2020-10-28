import React from 'react';
import { Col } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
    import TopHeading from '../Topheadings';

export default function Aboutpage() {
    return (
        <Container>
            <Row
            <Col>
            <div>
           <TopHeading title = {'ABOUT US'}/>
           </div
            </Col>
           
         
               <Col> 
                
                
                    
                    <h1 style ={{color : 'coralblue', textAlign : 'center' }}> CHURCH ADDRESS</h1>
                    <p>FLEM MINISTRIES</p>
                    <p> 58 S Girls School Road Indianapolis IN 46231 USA</p>
                
                    <h2>CHURCH PROGRAMS</h2>
                <p >Counseling time: Tuesday 10 am - 2pm</p>
                </Col>

               <Col>

<p >Thursday healing hour: 6:30 pm-8:00pm</p>

<p>Other Thursday bible study/prayer: 6:30pm-8:00pm</p>

<p>Sunday service: 9:30 am-12:30 pm</p>

<p>Vigil service: 3rd friday of every month 11pm to 1:00am</p>

</Col> 





</>Row
 </Container>
 
 
    
            )
        }
