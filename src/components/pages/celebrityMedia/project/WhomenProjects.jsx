
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../../common/Heading";


export default function WhomenProjects(){
  return(
    <>
     <section className="head_secn">
       <Container>
        <Heading title="WOMEN EMPOWERMENT" />
        <Row> 
        
         <Col xs={12} lg={6} md={6}>
           <ul>
             <li>Fashion Designing Course for women.</li>
             <li>absolutely free of cost.</li>
             <li>Stitching Course.</li>
          </ul>   
         </Col>
        </Row>
       </Container>
      </section>
  
    </>
  )
}