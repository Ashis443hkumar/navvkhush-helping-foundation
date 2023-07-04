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

export default function LegalStatus() {
  return (
    <>
      <section className="">
          <Container>
            <Heading title="LEGAL STATUS"/>
            <Row>
               <Col lg={6} col={6} className="">
                 <h4>Registrations/Exemption under various Acts</h4>
                 <p>Registration: Lakshyam is a registered non-governmental organization (NGO) under the relevant laws and regulations of the country. We have obtained the necessary registrations and certifications to operate legally as a nonprofit organization.</p>
                 <h4>Other Important Registration</h4>
                 <p><stong>E-Mail:- </stong>INFO@THECRIMECONTROL.COM</p>
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

        {/* about section AWARDS & RECOGNITION */}
       <section className="">
          <Container>
            <Heading title="AWARDS & RECOGNITION" />
            <Row>
                <Tabs
                  defaultActiveKey="2023"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3 text-center"
                  justify
                >
                <Tab eventKey="2023" title="2023">
                  Tab content for 2023
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
        <section className="slide_video" >
            <Swiper  
              // install Swiper modules
            modules={[Navigation, Scrollbar]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="slide_image">
                <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_image">
                <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_image">
                <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_image">
                <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_image">
                <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_image">
                <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
              </div>
            </SwiperSlide>
         </Swiper>
        </section>
       </section>


     {/* founder messages  */}
     <section class="founder mt-4">
      <Heading title="FOUNDER'S MESSAGE" />
        
       <Container className="container py-3">
        <Row className="row founder_content">
          <Col className="col-md-4 card_content">
          <div className="card">
            <div className="founder_image">
            <img src="https://media.licdn.com/dms/image/D4D22AQGVTV2N-rVrQw/feedshare-shrink_800/0/1685791142191?e=1688601600&v=beta&t=-To_qf9YHuOlpX9POTK2Lwx1ZNLg1jqcQiVJSzRBTrw" class="card-img-top " alt="" />
            <div class="home_icons">
                {/* <SocialsIcons/> */}
              </div>
            </div>
             <div className="card-body text-center">
              <h2>KAVITA RAWAT</h2>
              <h4>FOUNDER, NavvKhush Bharat</h4>
             </div>
           </div>
          </Col>
             <Col className="col-md-8">
               <div class="founder_content  content_desc">
                 <p>Since my childhood, I have been drawn towards  community development and serving those in need. Witnessing the struggles and hardships that many individuals and families face on a daily basis, I developed a deep sense of empathy and a strong desire to help make a </p>

                 <p>positive impact in their lives. I always had a dream to start my own foundation and work towards the goal of empowering women in particular.</p>
                 <p>Women in our society face numerous challenges and obstacles, including gender-based violence, discrimination, and lack of access to education and resources. I strongly believe that empowering women is not only a fundamental human right, but also a key factor in promoting social and economic development.</p>
                 <p>After years of planning and research, CCSDO (Crime Control & Social Development Organization) became a reality. This organisation is a dream and passion project of mine, dedicated to creating a brighter future for those who are most in need. I am committed to putting in my 100% effort and giving my best to serve the society through CCSDO.</p>
                 <p>With the help of a dedicated team of volunteers and supporters, CCSDO is working tirelessly to improve the lives of women and children living in semi-urban slums and villages. Our organisation provides education and skill development programs, as well as social and economic support, to help women become financially independent and break the cycle of poverty.</p>
                 <p>At CCSDO, we also strive to raise awareness about issues such as gender-based violence and discrimination, and work towards creating a safer and more equal society for all. I am grateful to have the opportunity to work towards my dream of community development and women empowerment through CCSDO, and I am excited to continue making a positive impact in the lives of those we serve.</p>
               </div>
             </Col>
           </Row>

         </Container>
       </section>
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
 