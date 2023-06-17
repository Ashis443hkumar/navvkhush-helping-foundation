import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import {Outlet} from "react-router-dom";
import Heading from "../../common/Heading";
import "./contact.css"

export default function Contact(){
  return(
    <>
     <section className="py-4">
     <Container className="contact">
       <Heading title="Contact" />
        <Row>
          <Col xs={12} md={6} lg={6} className="">
            <h4>HEAD OFFICE</h4>
            <address>B 1/27-A, Ground Floor, Hauz Khaz, New Delhi, India – 110016</address>
            <address>Tel: 011-40154493</address>
            <address>Email: support@lakshyam.co.in</address>
          </Col>
          <Col xs={12} md={6} lg={6} className="">
            <h4>BRANCH OFFICE</h4>
            <address>92, A.G Colony Kadru, Ranchi – 834002, Jharkhand</address>
            <address>Ph: 9431100761 | Tel: 0651-2330036</address>
            <address>Email: support@lakshyam.co.in</address>
          </Col>
        </Row>
      </Container>
     </section>

    </>
  )
}