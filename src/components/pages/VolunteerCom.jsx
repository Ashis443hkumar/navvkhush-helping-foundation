
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {NavLink, Link} from "react-router-dom"
import HeroButton from "../common/heroButton/HeroButton";

import "./styleCommn.css"


export default function VolunteerCom(){
  return(
    <>
    
     <section className="home_volunterr_banner">
       <Container>
        <Row >
         <Col xs={12} lg={8} md={8}>
           <h4 className="text-white">Start with helping one poor person and pave way for the bigger changes!</h4>
         </Col>
         <Col xs={12} lg={4} md={4} className="text-end ">
           <Link to="/volunteer">
              <HeroButton title="Become a volunteer" />
           </Link>
         </Col>
        </Row>
       </Container>
      </section>


 
    </>
  )
}