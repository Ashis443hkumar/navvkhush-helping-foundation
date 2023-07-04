import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Heading from "../../common/Heading";
import {NavLink, Link} from "react-router-dom"

// Import Swiper styles
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from "../../common/slide/Slide";
import HeroButton from "../../common/heroButton/HeroButton";
import SocialVenture from "./SocialVenture";
import LegalComp from "./LegalComp";
import Award from "./Award";
import FounderMessage from "./FounderMessage";

export default function LegalStatus() {
  return (
    <>
     <LegalComp/>
     <section className="my-5">
          <Container>
            <Row>
             <Col xs={12} md={4} lg={4}  >
               <Card className="text-center py-3 px-4"  style={{background:"#ff6b6b"}}>
                <Card.Body>
                  <Card.Title className="text-white">Our Vision</Card.Title>
                  <Card.Text>
                  Our unwavering commitment is to foster a world where every woman and child is treated with dignity and respect. We advocate for their rights, provide support, and work towards creating inclusive communities that value and uphold their well-being, equality, and empowerment.
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col xs={12} md={4} lg={4}  >
               <Card className="text-center py-3 px-4" style={{background:"#00d2d3"}}>
                <Card.Body>
                  <Card.Title className="text-white">Our Mission </Card.Title>
                  <Card.Text>
                  We empower women and children through skills development, education programs, training, and employment opportunities. By equipping them with knowledge, tools, and resources, we enable them to lead self-reliant lives, break the cycle of poverty, and achieve their full potential in society.
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col xs={12} md={4} lg={4} >
               <Card className="text-center py-3 px-4"   style={{background:"#ea8685"}}>
                <Card.Body>
                  <Card.Title className="text-white">Objectives</Card.Title>
                  <Card.Text>
                  Our core vision drives our passionate work, promoting skill training and employment opportunities for individuals. We strive to raise funds from diverse sources to support our mission, ensuring sustainability and expanding our impact in creating positive change in the community.
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
                   <li>Empowering marginalized communities through education, healthcare, and sustainable development for social progress</li>
                   <li>Promoting equality, justice, and human rights through advocacy, awareness, and community empowerment initiatives.</li>
                   <li>Providing essential services and support to vulnerable populations, addressing their immediate needs and fostering long-term resilience.</li>
                   <li>Creating a sustainable environment by promoting conservation, environmental awareness, and responsible resource management.</li>
                   <li>Building partnerships and collaborations to maximize impact and create systemic change in addressing societal challenges.</li>
                 </ul>
              </Col>
            </Row>
          </Container>
        </section>

      <Award/>

      <FounderMessage/>
        
      <SocialVenture/>

  

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

      {/* ANNUAL REPORTS */}
       <section className="">
        <Container>
         <Heading title="ANNUAL REPORTS" subtitle="Our annual reports provide comprehensive insights into our activities, impact, and financials, showcasing the progress and achievements of our organization." />
        <Row>
        </Row>
       </Container>
       {/* <Slide/>    */}

      </section>

     
        
        
      
    </>
  );
}
 