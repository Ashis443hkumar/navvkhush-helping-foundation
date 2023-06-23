import React, { useState, useEffect } from "react"
import "./style.css"
import Slide from "./Slide"
import Testimonial_data from "./Testimonial_data"

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Testimonial = () => {
  const [data, setdata] = useState(Testimonial_data)

  return (
    <>
       <Container>
         <Row>
           {
             data.map((value) =>{
              return(
                 <Col lg={4} >
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={value.image} />
                  <Card.Body>
                    <Card.Title>{value.design}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
               </Col>
               )
             })
           }
          
        
         </Row>
       </Container>
    </>
  )
}

export default Testimonial