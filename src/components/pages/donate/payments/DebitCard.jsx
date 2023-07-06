
import React,{useState } from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import Form from 'react-bootstrap/Form';
import SelectOption from "./SelectOption";

export default function DebitCard(){

  return(
    <>
     <section className="">
       <Container>
        <Row >
         <Col xs={12} lg={5} md={5} className="mx-auto bg-secondary p-3">
        <Row className="text-start">
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
           <div className="card_desc ">
             <label htmlFor="">CVV</label>
             <input type="text" placeholder="347" />
           </div>
        </Col>
         </Row>

        </Row>
         </Col>
        </Row>
       </Container>
      </section>


      

 
    </>
  )
}