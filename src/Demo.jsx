
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import "./head.css"

export default function Demo(){
  return(
    <>
     <section className="head_section">
       <Container>
        <Row>
         <Col xs={12} lg={6} md={6}> </Col>
         <Col xs={12} lg={6} md={6}> </Col>
        </Row>
       </Container>
      </section>

     <section className="head_section">
      <Container className="">
        <Row>
          <Col xs={6} md={6} lg={6} className="">
            <Image src="" roundedCircle  />
          </Col>
          <Col xs={6} md={6} lg={6}  className="">
           <h1>Col demo</h1>
          </Col>
        </Row>
      </Container>

      
      <Container>
       <Row>
         <Col xs={12} lg={6} md={6}> </Col>
         <Col xs={12} lg={6} md={6}> </Col>
       </Row>
      </Container>
 
      </section>
    </>
  )
}