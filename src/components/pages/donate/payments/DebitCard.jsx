
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default function DebitCard(){
  return(
    <>
     <section className="">
       <Container>
         <p>Add New Card</p>
        <Row>
         <Col xs={12} lg={8} md={8}> 
         <span>Card Number</span>
           <input type="number"/>
         </Col>
         <Col xs={12} lg={4} md={4}>
            <input type="number"/>
         </Col>
        </Row>
        <Row>
         <Col xs={12} lg={8} md={8}> 
           <input type="number"/>
         </Col>
         <Col xs={12} lg={4} md={4}>
            <input type="number"/>
         </Col>
        </Row>
       </Container>
      </section>

 
    </>
  )
}