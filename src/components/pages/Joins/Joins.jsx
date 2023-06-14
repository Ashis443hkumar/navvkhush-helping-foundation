import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Card from 'react-bootstrap/Card';

export default function Joins() {
  return (
    <>
    <Heading title="THE LAKSHYAM FAMILY" subtitle="Lakshyam believes there is no dearth of good intentions and helping hands. We are always eager and excited to welcome passionate and dedicated volunteers to our budding team. If you have an urge to do something nice for the society and have any kind of skills or knowledge that can be taken into use, Lakshyam might just be the place for you to do it." />

   <section className="joins_section ">
      <Container className="join_background">
        <Heading title="WHY VOLUNTEER / INTERN WITH LAKSHYAM" />
       <Row>
         <Col xs={12} lg={6} md={6}>
          <p>Volunteering is such a simple, effecting and rewarding way to work for a cause that you care about. Below are some of the reasons suggesting why should volunteer/ intern with us.</p>
           <ul>
             <li>By helping the other people, you will play a crucial role towards the upliftment of the community and the world as a whole. You will become aware of the small things (often neglected) that can impact the society in a various positive ways. It will make you more empathetic towards others.</li>

             <li>Your volunteering experience will help you develop invaluable professional skills and build your leadership capabilities. The experience of volunteering with us will make you more empathetic towards the feelings of others. All of this will help you gain confidence and enhance your overall personality.</li>

             <li>Personality If you are a fresher and looking out for employment opportunity, then volunteering with us will definitely be an add on in your resume and give you an edge over the others.</li>

             <li>One thing that we guarantee is that, your volunteering experience with us will give an immense amount of happiness and make you self content. Because we believe that there is more content and satisfaction in giving rather than receiving.</li>
           </ul>
         </Col>
         <Col xs={12} lg={6} md={6}>
         <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/intern-pic.png" rounded  />
              
         </Col>
       </Row>
      </Container>
      </section>

      <section className="joins_section py-4">
       <Container>
        <Heading title="VOLUNTEER / INTERN"  />
        <p>Lakshyam has introduced a volunteering & internship program in India which gives an opportunity for those who want to give back to society to join our team. We promise a holistic experience during the tenure of your association which includes interaction with the beneficiaries.</p>
        <p>Your time, skills, knowledge and most importantly, your passion to bring about a positive change in society is exactly why we would love to have you on board.</p>
        <p>Lakshyam provides a diverse range of tasks for volunteers. A volunteer may choose from any (One or more) from below:</p>
       <Row className="mt-3 py-4">
         <Col xs={12} lg={3} md={3}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/icon-1.png" style={{width:"80px", height:"80px", margin: "10px auto"}} />
          <Card.Body className="text-center">
            <Card.Title>Media & Communications:</Card.Title>
            <Card.Text>
              Create Posters, Draft Online Content, Graphic Designing, Film Making, Creative and Content writing
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>
         <Col xs={12} lg={3} md={3}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/icon-1.png" style={{width:"80px", height:"80px", margin: "10px auto"}} />
          <Card.Body className="text-center">
            <Card.Title>Media & Communications:</Card.Title>
            <Card.Text>
              Create Posters, Draft Online Content, Graphic Designing, Film Making, Creative and Content writing
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>
         <Col xs={12} lg={3} md={3}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/icon-1.png" style={{width:"80px", height:"80px", margin: "10px auto"}} />
          <Card.Body className="text-center">
            <Card.Title>Media & Communications:</Card.Title>
            <Card.Text>
              Create Posters, Draft Online Content, Graphic Designing, Film Making, Creative and Content writing
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>

         <Col xs={12} lg={3} md={3}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/icon-1.png" style={{width:"80px", height:"80px", margin: "10px auto"}} />
          <Card.Body className="text-center">
            <Card.Title>Media & Communications:</Card.Title>
            <Card.Text>
              Create Posters, Draft Online Content, Graphic Designing, Film Making, Creative and Content writing
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>
         <Col xs={12} md={10} className="mx-auto mt-5">
         <Row className="mx-auto">
         <Col xs={12} lg={4} md={4}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/icon-1.png" style={{width:"80px", height:"80px", margin: "10px auto"}} />
          <Card.Body className="text-center">
            <Card.Title>Media & Communications:</Card.Title>
            <Card.Text>
              Create Posters, Draft Online Content, Graphic Designing, Film Making, Creative and Content writing
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>
         <Col xs={12} lg={4} md={4}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/icon-1.png" style={{width:"80px", height:"80px", margin: "10px auto"}} />
          <Card.Body className="text-center">
            <Card.Title>Media & Communications:</Card.Title>
            <Card.Text>
              Create Posters, Draft Online Content, Graphic Designing, Film Making, Creative and Content writing
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>
         <Col xs={12} lg={4} md={4}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/icon-1.png" style={{width:"80px", height:"80px", margin: "10px auto"}} />
          <Card.Body className="text-center">
            <Card.Title>Media & Communications:</Card.Title>
            <Card.Text>
              Create Posters, Draft Online Content, Graphic Designing, Film Making, Creative and Content writing
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>

     
      
       </Row>
         </Col>
      
       </Row>
      </Container>

      </section>


    
      
    </>
  );
}
 