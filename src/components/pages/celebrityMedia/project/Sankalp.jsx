
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../../common/Heading";


export default function Sankalp(){
  return(
    <>
     <section className="my-5">
       <Container>
         <Heading title="Sankalp Project" />
        <Row> 
         <Col xs={12} lg={12} md={12}>
          <p>Sankalp was 3 day training program for females/transgenders. It was sponsored by NIESBUD. Our trainer on first day was Mr. Sumit Sharma, on second & third day Bhanupriya was our trainer. </p>
          <p>There were 55 people who were attending this 3 day training program. Among 55 people, there were 3 transgenders & 52 women</p>
          <p>In these three days, we provided tote bags with notepad and a pen & refreshments to every trainee.</p>
          <p>These 3 days were full of informations, trainees get to know about business ideas, many schemes launched by government, about udyam, how to register on udyam,  some of them put up some questions & they answered it very nicely and patiently.</p>
          <p>. We also asked some women about the training, they give positive response and also told us to inform if any training program held in future.</p>
         </Col>
        </Row>
       </Container>
      </section>
  
    </>
  )
}