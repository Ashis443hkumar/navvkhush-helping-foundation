
import React,{useState } from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

export default function DebitCard(){

  return(
    <>
     <section className="">
       <Container>
        <Row >
         <Col xs={12} lg={5} md={5} className="mx-auto bg-secondary p-3">
        <Row>
         <Col xs={12} lg={8} md={8}>
           <div className="card_desc">
             <label htmlFor="">Card Number</label>
             <input type="text" placeholder="3244 5544 45566" />
           </div>
         </Col>
         <Col xs={12} lg={4} md={4}> 
           <div className="card_desc">
             <label htmlFor="">Expiry </label>
             <input type="text" placeholder="04/2028" />
           </div>
        </Col>

         <Row className="mt-3">
         <Col xs={12} lg={8} md={8}>
           <div className="card_desc">
             <label htmlFor="">Card Holder's Name</label>
             <input type="text" placeholder="card holder name" />
           </div>
         </Col>
         <Col xs={12} lg={4} md={4}> 
           <div className="card_desc">
             <label htmlFor="">CVV</label>
             <input type="text" placeholder="347" />
           </div>
        </Col>
         </Row>

        </Row>
         </Col>
         {/* <Col xs={12} lg={6} md={6}> </Col> */}
        </Row>
       </Container>
      </section>

      <section className="mt-2">
       <Container>
        <Row>
         <Col xs={12} lg={6} md={6} className="mx-auto bg-secondary p-3"> 
        <Row>
         <Col xs={12} lg={4} md={4} className="bg-white p-4">
           HDFC Bank
         </Col>
         <Col xs={12} lg={4} md={4} className="bg-white p-4" style={{borderLeft:"1px solid #000", borderRight:"1px solid black"}}>
           HDFC Bank
         </Col>
         <Col xs={12} lg={4} md={4} className="bg-white p-4">
           HDFC Bank
         </Col>
        </Row>

        <Row className="" style={{borderTop:"1px solid #000"}}>
         <Col xs={12} lg={4} md={4} className="bg-white p-4">
           HDFC Bank
         </Col>
         <Col xs={12} lg={4} md={4} className="bg-white p-4" style={{borderLeft:"1px solid #000", borderRight:"1px solid black"}}>
           HDFC Bank
         </Col>
         <Col xs={12} lg={4} md={4} className="bg-white p-4">
           HDFC Bank
         </Col>
        </Row>
        <Row className="mt-2">
         <Col xs={12} lg={12} md={12}> 
         <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
         </Col>
        </Row>


         </Col>
        </Row>
       

       </Container>
      </section>

 
    </>
  )
}