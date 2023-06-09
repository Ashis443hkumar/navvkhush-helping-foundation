import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import Heading from "../../common/Heading";

export default function Introduction() {
  return (
    <>
        <section className="">
          <Container>
            <Heading title="ABOUT US"/>
            <Row>
               <Col lg={12} className="">
                 <p>Lakshyam was founded in the year 2012 by a young social entrepreneur who further brought a group of like minded people together to contribute towards the betterment of society with focus on child education, holistic child development and women empowerment. We started this journey with a dream of creating a world where every child is showered with love, given opportunities for having a bright future, no child’s innocence is marred by the horrors of child labour, and a world where women’s well being is paid attention to and they’re empowered to sustain themselves and their family.</p>
                 <p>In India 35.2% of people living in Urban Areas reside in slums that are overpopulated, have lack of adequate water supply, sanitation, and security. Children of these slum dwellers often do not get access to basic education and instead have to start working to support their families. The statistics and the problem is the same in both rural or urban India.</p>
                 <p>We at Lakshyam vowed to put an end to this widespread violation of people’s fundamental rights, especially of women and children residing in the slums of India. We aim to empower them through education and employment by implementing models of development that are tailored according to the needs of the community</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="my-5">
          <Container>
            <Row>
             <Col xs={12} md={4} lg={4} style={{background:""}} >
               <Card className="text-center py-3 px-4" >
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                      We intend to empower and expand our family in the coming years. Our mission is to enroll more students to the formal schooling system, increase our reach of toy libraries, and upskill a new women community
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col xs={12} md={4} lg={4} style={{background:""}} >
               <Card className="text-center py-3 px-4" >
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                      We intend to empower and expand our family in the coming years. Our mission is to enroll more students to the formal schooling system, increase our reach of toy libraries, and upskill a new women community
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col xs={12} md={4} lg={4} style={{background:""}} >
               <Card className="text-center py-3 px-4" >
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                      We intend to empower and expand our family in the coming years. Our mission is to enroll more students to the formal schooling system, increase our reach of toy libraries, and upskill a new women community
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>

            </Row>
          </Container>
        </section>

        <section className="">
          <Container>
            <Heading title="AIM & OBJECTIVE"/>
            <Row>
               <Col lg={12} className="">
                 <ul>
                   <li>To ensure ‘Education-for-all’ by providing free-of-cost education to underprivileged children.</li>
                   <li>To provide a holistic education for the development of students</li>
                   <li>To provide a conducive environment that fosters their creativity and curiosity. </li>
                   <li>To enroll students into the formal schooling system.</li>
                   <li>To help rural women learn vocational skills and attain financial independence.</li>
                   <li>To create replicable development models for rural India and bridge the gap between urban and rural India.</li>
                   <li>To ensure that rural populations do not have to migrate to urban cities for a better standard of living.</li>
                 </ul>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="">
          <Container>
            <Heading title="LEGAL STATUS"/>
            <Row>
               <Col lg={6} col={6} className="">
                 <h4>Registrations/Exemption under various Acts</h4>
                 <p>Lakshyam is an NGO registered as a trust under the Indian Trust Act 1882 vide registration No. 393 dated 3rd Feb 2012 with the amalgamation of Lakshya, a society; registered under Societies Registration Act 1860 vide registration number 440 dated 23rd march 2005</p>
                 <h4>Other Important Registration</h4>
                 <p></p>
              </Col>
              <Col lg={6} col={6} className="">
                 <h4>Donations/voluntary contributions are exempt under section :</h4>
                 <p>12 (A) and 80(G) 50 (vi) of the Income Tax Act 1961 as per permission granted by the Director of Income Tax (exemptions), New Delhi vide letter No. DEL-LE24407-11012013</p>

                 <p>Permanent Income Tax No. is AAATL9638D We are also eligible to receive foreign funding from the Ministry of External Affairs by FCRA No. is 231661694.</p>
                 
               </Col>

            </Row>
          </Container>
        </section>




        
      
    </>
  );
}
