
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import SelectOption from "./SelectOption";

import Form from 'react-bootstrap/Form';

export default function Netbanking(){
  return(
    <>
     
      {/* all banks option  */}

      <section className="mt-2">
       <Container>
        <Row>
         <Col xs={12} lg={5} md={5} className="mx-auto bg-secondary p-3"> 
         <p><strong>Select Bank</strong></p>
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
         <p><strong>All Banks Select</strong></p>
         <Form.Select aria-label="Default select example">
          <option>All Banks Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
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