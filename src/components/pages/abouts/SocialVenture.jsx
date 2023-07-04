
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
          <Card.Img variant="top" className="volunteer_image" src="https://tse1.mm.bing.net/th?id=OIP.nBKsTmo9QpgAWMgCOP8lLwHaDQ&pid=Api&P=0&h=180" />
          <Card.Body className="text-center">
            <Card.Title>Driving Change Through Entrepreneurship</Card.Title>
            <Card.Text>
            To learn more about Travel4Change, our social enterprise that offers volunteer programs and immersive travel packages, please visit our website. Our distinct approach empowers volunteers to actively engage in community projects, providing them with a profound understanding and experience of the local culture, while making a significant and long-lasting impact. Discover our programs and join us in making a positive and sustainable difference in communities that require support.
            </Card.Text>
          </Card.Body>
         </Card>  
         </Col>
         <Col xs={12} lg={6} md={6}>
         <Card  className="text-center" >
          <Card.Img  className="volunteer_image"  variant="top" src="https://tse3.mm.bing.net/th?id=OIP.kH30YlRbH9rz5k9ESwTZQAHaFC&pid=Api&P=0&h=180"  />
          <Card.Body className="text-center">
            <Card.Title>Collaboration, and Impact Investing</Card.Title>
            <Card.Text>
             For more information about Holy Cow Foundation, the NGO committed to establishing a healthy and secure habitat for abandoned and distressed animals in India, kindly visit our website. Our primary focus is on animal welfare, specifically for cattle, and we offer guidance to Gaushalas (cow shelters) to implement sustainable models that guarantee a nurturing and safe environment for these animals, alongside efficient management practices. Discover our initiatives and join us in extending support to this critical cause.
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