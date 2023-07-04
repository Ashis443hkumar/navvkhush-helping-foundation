
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Card from 'react-bootstrap/Card';



export default function SocialVenture(){
  return(
    <> 
       <section className="mb-5">
        <Container>
         <Heading title="SOCIAL VENTURES" subtitle="Lakshyam actively engages in impactful social ventures addressing education, healthcare, skill development, women empowerment, and community development. Through innovative approaches, we create sustainable solutions, empower communities, and foster holistic development. Our initiatives aim to bring positive change and build a more inclusive society for all" />
        <Row>
         <Col xs={12} lg={6} md={6}>
         <Card >
          <Card.Img variant="top" className="volunteer_image" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/travel.png" />
          <Card.Body className="text-center">
            <Card.Title>Travel Change</Card.Title>
            <Card.Text>
            To know more about Travel4change, our social enterprise offering volunteer programs and immersive travel packages, visit our website. Our unique approach allows volunteers to actively participate in community projects, enabling them to deeply experience and understand the local culture while making a meaningful and sustainable impact. Explore our programs and join us in creating positive change in communities in need.
            </Card.Text>
          </Card.Body>
         </Card>  
         </Col>
         <Col xs={12} lg={6} md={6}>
         <Card  className="text-center" >
          <Card.Img  className="volunteer_image"  variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/travel.png"  />
          <Card.Body className="text-center">
            <Card.Title>Travel Change</Card.Title>
            <Card.Text>
            To know more about Holy Cow Foundation, the NGO dedicated to creating a healthy habitat for abandoned and distressed animals in India, please visit our website. We focus on animal welfare, particularly for cattle, and provide guidance to Gaushalas (cow shelters) to adopt sustainable models that ensure a safe and nurturing environment for the animals, along with efficient management practices. Explore our initiatives and join us in supporting this urgent cause.
            </Card.Text>
          </Card.Body>
         </Card>  
         </Col>
        
        </Row>
       </Container>
      </section>
      </>
  )
}