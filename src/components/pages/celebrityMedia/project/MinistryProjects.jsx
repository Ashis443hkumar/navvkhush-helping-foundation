
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../../common/Heading";


export default function MinistyProjects(){
  return(
    <>
     <section className="head_section">
       <Container>
       <Heading  title="PROJECT NIPUN UNDER MINISTRY OF HOUSING AND URBAN AFFAIRS IMPLEMENTED BY - CCSDO" />
        <Row> 
         <Col xs={12} lg={12} md={12}>
           <ul>
             <li>RPL (Recognition of prior learning) Programme for Construction Workers.</li>
             <li>Project Implementing Agencies (PIAs) Construction Sector Skill Council.</li>
             <li>RPL at Construction sites.</li>
           </ul>
         </Col>
        </Row>
       </Container>
      </section>
  
    </>
  )
}