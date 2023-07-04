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
import SlideVideo from "./SlideVideo";
 

export default function Mission() {
  return (
    <>
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

        <section className="">
          <Container>
            <Heading title="LEGAL STATUS"/>
            <Row>
               <Col lg={6} col={6} className="">
                 <h4>Registrations/Exemption under various Acts</h4>
                 <p>Registration: Lakshyam is a registered non-governmental organization (NGO) under the relevant laws and regulations of the country. We have obtained the necessary registrations and certifications to operate legally as a nonprofit organization.</p>
                 <h4>Other Important Registration</h4>
                 <p>Niti Ayog Unique Id – DL/2013/0059507</p>
                 <p>Guide Star Registration No. – 4540</p>
                 <p>CAF Certificate No. – 127/N-53/2015-2016</p>
                 <p>MSME No.: JH2000005860</p>
                 <p>CSR Number : 00007758</p>
              </Col>
              <Col lg={6} col={6} className="">
                 <h4>Donations/voluntary contributions are exempt under section :</h4>
                 <p>Tax Exemption: Lakshyam has been granted tax-exempt status by the appropriate authorities. Donations and contributions made to our organization are eligible for tax benefits as per the prevailing tax laws and regulations.</p>

                 <p>We ensure compliance with all legal requirements and maintain transparency in our operations to uphold the trust and confidence of our stakeholders and supporters.</p>

                 <p>Permanent Income Tax No. is AAATL9638D</p>
                 <p>We are also eligible to receive foreign funding from the Ministry of External Affairs by FCRA No. is 231661694.</p>
                 <p>Income Tax Certificate – PDF File Link</p>
                 <p>Registration Certificate – PDF File Link</p>
                 <p>PAN Details of the Organization – PDF File Link</p>
                 <p>FCRA Certificate – PDF File Link</p>
               </Col>

            </Row>
          </Container>
        </section>

        {/* about section AWARDS & RECOGNITION */}
       <section className="">
          <Container>
            <Heading title="AWARDS & RECOGNITION" />
            <Row>
                <Tabs
                  defaultActiveKey="2022"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3 text-center"
                  justify
                >
                <Tab eventKey="2022" title="2022">
                  Tab content for 2022
                  <div className="">
                    <ul>
                      <li>Citizen Women Award 2022 to Mrs. Poonam Anand by Citizen Club of Ranchi</li>
                      <li>Chancellor Award 2022 for Women Empowerment to Mrs. Poonam Anand by YBN University, Ranchi</li>
                      <li>Award to Rashi Anand as a Social Worker by ‘WBR Corp UK Limited’ (India Edition Felicitation 2022)</li>
                      <li>Award of Excellence in Women & Child Development (by CSR Universe Social Impact Awards 2022)</li>
                      <li>‘Social Stalwart’ Award to Rashi Anand for her excellent work in Social Welfare (by i2u Social Foundation)</li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey="2021" title="2021">
                  Tab content for 2021
                  <div className="">
                    <ul>
                      <li>Certificate of recognition as one of the ‘Top 10 Revolutionary NGO’s in India’ by Scopup Magazine.</li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey="2020" title="2020">
                  Tab content for 2020
                  <div className="">
                    <ul>
                      <li>Dr. Sarvepalli Radhakrishnan Award for contribution towards nation’s development.</li>
                      <li>‘Young Women Social Entrepreneur Award’ by National Foundation for Entrepreneurship Development for remarkable contribution to Women Empowerment & Support Services.</li>
                    </ul>
                  </div>
                </Tab>

              </Tabs>

            </Row>
        </Container>
       </section>

        <SlideVideo/>
       
        <FounderMessage/>

        <SocialVenture/>

      {/* ANNUAL REPORTS */}
       <section className="">
        <Container>
         <Heading title="ANNUAL REPORTS" subtitle="Our annual reports provide comprehensive insights into our activities, impact, and financials, showcasing the progress and achievements of our organization." />
        <Row>
        </Row>
       </Container>
       <Slide/>   

      </section>

     <Advrisoy/>
      
    </>
  );
}
 