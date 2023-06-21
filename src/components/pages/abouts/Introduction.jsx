import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Heading from "../../common/Heading";


// Import Swiper styles
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from "../../common/slide/Slide";
 

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
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                      We intend to empower and expand our family in the coming years. Our mission is to enroll more students to the formal schooling system, increase our reach of toy libraries, and upskill a new women community
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col xs={12} md={4} lg={4}  >
               <Card className="text-center py-3 px-4" style={{background:"#00d2d3"}}>
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                      We intend to empower and expand our family in the coming years. Our mission is to enroll more students to the formal schooling system, increase our reach of toy libraries, and upskill a new women community
                  </Card.Text>
                </Card.Body>
              </Card>
             </Col>
             <Col xs={12} md={4} lg={4} >
               <Card className="text-center py-3 px-4"   style={{background:"#ea8685"}}>
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
                 <p>Lakshyam is an NGO registered as a trust under the Indian Trust Act 1882 vide registration No. 393 dated 3rd Feb 2012 with the amalgamation of Lakshya, a society; registered under Societies Registration Act 1860 vide registration number 440 dated 23rd march 2005</p>
                 <h4>Other Important Registration</h4>
                 <p>Niti Ayog Unique Id – DL/2013/0059507</p>
                 <p>Guide Star Registration No. – 4540</p>
                 <p>CAF Certificate No. – 127/N-53/2015-2016</p>
                 <p>MSME No.: JH2000005860</p>
                 <p>CSR Number : 00007758</p>
              </Col>
              <Col lg={6} col={6} className="">
                 <h4>Donations/voluntary contributions are exempt under section :</h4>
                 <p>12 (A) and 80(G) 50 (vi) of the Income Tax Act 1961 as per permission granted by the Director of Income Tax (exemptions), New Delhi vide letter No. DEL-LE24407-11012013</p>

                 <p>Permanent Income Tax No. is AAATL9638D We are also eligible to receive foreign funding from the Ministry of External Affairs by FCRA No. is 231661694.</p>

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
                  defaultActiveKey="2023"
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
                <Tab eventKey="2019" title="2019">
                  Tab content for 2019
                  <div className="">
                    <ul>
                      <li>Awarded “Delhi Healthcare in Leadership” by Zee Business, to Lakshyam – Organisation.</li>
                      <li>Awarded “Most Future Ready NGO” by NDIM to Lakshyam .</li>
                      <li>Awarded “World_Youth Forum 2019” In World Youth Forum, 2019 more than Ten Thousand changemakers across 154 Countries have participated to talk and get the solution to problems that require immediate attentions Awarded by His Excellency President of Egypt to Rashi Anand.</li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey="2018" title="2018">
                  Tab content for 2018
                  <div className="">
                    <ul>
                      <li>Delhi Management association award” Young Social Achiever Award” in 2018.</li>
                      <li>Awarded “Naari Gaurav Samman” by Rajasthan Academy, New Delhi in 2018 towards contribution and welfare of the society.</li>
                      <li>Divya Prem Sabha Mission Haridwar presented with “ Sewa Samman “ 2018.</li>
                      <li>Awarded one of the Influencers in “Womennovator” organized by Confederation of Women Entrepreneurs.</li>
                      <li>“Bharat Jyoti Award” by India International Friendship Society for exemplary work in the social sector.</li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey="2017" title="2017">
                  Tab content for 2017
                  <div className="">
                    <ul>
                      <li>Rising Star Champion Award, 2017 by ‘We are the City’ India & Barclays, for outstanding performance as a woman entrepreneur.</li>
                      <li>Rising Star Champion Award, 2017 by ‘We are the City’ India & Barclays, for outstanding performance as a woman entrepreneur.</li>
                      <li>Rising Star Champion Award, 2017 by ‘We are the City’ India & Barclays, for outstanding performance as a woman entrepreneur.</li>
                      <li>Rising Star Champion Award, 2017 by ‘We are the City’ India & Barclays, for outstanding performance as a woman entrepreneur.</li>
                      <li>Rising Star Champion Award, 2017 by ‘We are the City’ India & Barclays, for outstanding performance as a woman entrepreneur.</li>
                      <li>Rising Star Champion Award, 2017 by ‘We are the City’ India & Barclays, for outstanding performance as a woman entrepreneur.</li>
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

       {/* SOCIAL VENTURES */}
       <section className="">
        <Container>
         <Heading title="SOCIAL VENTURES" subtitle="Lakshyam has been striving to become self sustainable, we’ve launched two initiatives to support our vision. These programs have been initiated with a vision to create an empathizing society utilizing environmental friendly practices.Profits earned through these ventures will be utilized for the NGO’s activities:" />
        <Row>
         <Col xs={12} lg={6} md={6}>
         <Card >
          <Card.Img variant="top" className="volunteer_image" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/travel.png" />
          <Card.Body className="text-center">
            <Card.Title>Travel Change</Card.Title>
            <Card.Text>
            Travel4change is a social enterprise offering a combination of volunteer programs and immersive travel packages benefiting you and the development of communities in need. Unlike normal travellers who have few opportunities to discover a culture during a stay abroad, our volunteers actively participate in a project and get highly involved. We believe that any traveller should be given the opportunity to explore the culture in-depth while creating a meaningful and sustainable impact on a local level. To know more about the organization, please ...Read More
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
            Travel4change is a social enterprise offering a combination of volunteer programs and immersive travel packages benefiting you and the development of communities in need. Unlike normal travellers who have few opportunities to discover a culture during a stay abroad, our volunteers actively participate in a project and get highly involved. We believe that any traveller should be given the opportunity to explore the culture in-depth while creating a meaningful and sustainable impact on a local level. To know more about the organization, please ...Read More
            </Card.Text>
          </Card.Body>
         </Card>  
         </Col>
        
        </Row>
       </Container>
      </section>

      {/* ANNUAL REPORTS */}
       <section className="">
        <Container>
         <Heading title="ANNUAL REPORTS" subtitle="Below are the annual reports which depict the main activities and work accomplished by Lakshyam till date." />
        <Row>
          <Slide/>   
        </Row>
       </Container>
      </section>

        
      
    </>
  );
}
