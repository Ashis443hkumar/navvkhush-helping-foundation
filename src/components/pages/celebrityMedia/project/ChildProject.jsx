
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../../common/Heading";


export default function ChildProject(){
  return(
    <>
     <section className="">
       <Container>
       <Heading title="CHILD EDUCATION" />
        <Row> 
         <Col xs={12} lg={6} md={6}>
          <ul>
            <li>Opening School for underpriviledged children so they can gain qualit education.</li>
            <li>Summer Camp for children.</li>
            
            </ul>
         </Col>
         <Col xs={12} lg={6} md={6}> </Col>
        </Row>
       </Container>
      </section>
  
    </>
  )
}