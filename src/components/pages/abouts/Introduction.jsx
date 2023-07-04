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
import Advrisoy from "./Advrisoy";
import SocialVenture from "./SocialVenture";
import FounderMessage from "./FounderMessage";
import Award from "./Award";
 

export default function Introduction() {
  return (
    <>
        <section className="pt-3">
          <Container>
            <Heading title="ABOUT US"/>
            <Row  className="py-4">
               <Col lg={12} className="">
                 <p>At the Crime Control & Social Development Organisation (CCSDO), we believe that every woman has the right to live a life of dignity and self-respect. Our registered NGO envisions working towards bringing significant changes in the lives of women across society by providing economic and social support, empowering them with financial independence..</p>
                 <p>CCSDO is committed to contributing to society as equal partners in the development of families and communities, with a focus on reducing violence, harassment, and discrimination against women. We believe that by empowering women, we can create a brighter, more equal future for all</p>
                 <p>Our team is made up of dedicated professionals who are passionate about making a difference. From providing education and training to children and women in underserved communities to giving stitching classes to women inmates in Tihar Jail, our programs aim to equip individuals with the knowledge and tools they need to succeed in the modern world.</p>
                 <p>We are proud of our achievements and the impact we have made in the lives of women and children. Our achievements till date include educating 1779 children, providing counselling to over 3000 women, registering over 1250 women with us, and empowering 75 women who are now financially independent. Additionally, we were selected for the Delhi Government</p>
                 <p>Project for Digital Literacy Awareness Program in Delhi Government Schools, North East Delhi, and we have received orders from Munjal Showa and AG Industries for uniform and T-shirt stitching, providing employment opportunities to women.</p>
                 <p>At CCSDO, we are committed to our mission of creating a more just and equal society. Join us on this journey towards a brighter future for all</p>
               </Col>
            </Row>
          </Container>
        </section>

        <section className="my-5">
          <Container>
            <Row>
             <Col xs={12} md={4} lg={4}  >
               <Card className="text-center py-3 px-4"  style={{background:"#ff6b6b"}}>
                <Card.Body>
                  <Card.Title>Our Vision</Card.Title>
                  <Card.Text>
                  Our unwavering commitment is to foster a world where every woman and child is treated with dignity and respect. We advocate for their rights, provide support, and work towards creating inclusive communities that value and uphold their well-being, equality, and empowerment.
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col xs={12} md={4} lg={4}  >
               <Card className="text-center py-3 px-4" style={{background:"#00d2d3"}}>
                <Card.Body>
                  <Card.Title>Our Mission </Card.Title>
                  <Card.Text>
                  We empower women and children through skills development, education programs, training, and employment opportunities. By equipping them with knowledge, tools, and resources, we enable them to lead self-reliant lives, break the cycle of poverty, and achieve their full potential in society.
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col xs={12} md={4} lg={4} >
               <Card className="text-center py-3 px-4"   style={{background:"#ea8685"}}>
                <Card.Body>
                  <Card.Title>Objectives</Card.Title>
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

        <FounderMessage/>


        <section className="">
          <Container>
            <Heading title="LEGAL STATUS"/>
            <Row>
               <Col lg={6} col={6} className="">
                 <h4>Registrations/Exemption under various Acts</h4>
                 <p>Registration: Lakshyam is a registered non-governmental organization (NGO) under the relevant laws and regulations of the country. We have obtained the necessary registrations and certifications to operate legally as a nonprofit organization.</p>
                 <h4>Other Important Registration</h4>
                 <p><stong>E-Mail</stong>INFO@THECRIMECONTROL.COM</p>
                 <p><stong>Date of Establishment:- </stong>15TH OCT 2020</p>
                 <p><stong>Registration No:- </stong>2325</p>
                 <p><stong>MSME No:- </stong>UDYAM-DL-02-0045921</p>
                 <p><stong>PAN:- </stong>AACTC7828E</p>
                 <p><stong>NGO Darpan No:- </stong>DL/2021/0300598</p>
                 <p><stong>TAN:- </stong>DELC23076E</p>
                 <p><stong>80G:- </stong>AACTC7828EF20222</p>
                 <p><stong>12A:- </stong>AACTC7828EE20216</p>

              </Col>
              <Col lg={6} col={6} className="">
                 <h4>Donations/voluntary contributions are exempt under section :</h4>
                 <p>Tax Exemption: Lakshyam has been granted tax-exempt status by the appropriate authorities. Donations and contributions made to our organization are eligible for tax benefits as per the prevailing tax laws and regulations.</p>

                 <p>We ensure compliance with all legal requirements and maintain transparency in our operations to uphold the trust and confidence of our stakeholders and supporters.</p>
               </Col>
            </Row>
          </Container>
        </section>

        <Award/>

      

      {/* ANNUAL REPORTS */}
       <section className="">
        <Container>
         <Heading title="ANNUAL REPORTS" subtitle="Our annual reports provide comprehensive insights into our activities, impact, and financials, showcasing the progress and achievements of our organization." />
        <Row>
        </Row>
       </Container>
       {/* <Slide/>    */}

      </section>
      <SocialVenture/>

      <Advrisoy/>
      
      
    </>
  );
}
