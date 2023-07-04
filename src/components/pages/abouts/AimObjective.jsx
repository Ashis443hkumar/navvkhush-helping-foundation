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
import LegalComp from "./LegalComp";
 


export default function AimObjective() {
  return (
    <>
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

        <LegalComp/>



        <Award/>

       <FounderMessage/>


     

       <SocialVenture/>

     

      {/* ANNUAL REPORTS */}
       <section className="">
        <Container>
         <Heading title="ANNUAL REPORTS" subtitle="Our annual reports provide comprehensive insights into our activities, impact, and financials, showcasing the progress and achievements of our organization." />
        <Row>
        </Row>
       </Container>
       {/* <Slide/>    */}

      </section>

      
      <Advrisoy/>


     
        
      
    </>
  );
}
