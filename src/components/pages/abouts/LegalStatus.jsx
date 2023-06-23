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

export default function LegalStatus() {
  return (
    <>
     <section className="">
          <Container>
            <Heading title="LEGAL STATUS"/>
            <Row>
               <Col lg={6} col={6} className="">
                 <h4>Registrations/Exemption under various Acts</h4>
                 <p>Registration: Navvkhush is a registered non-governmental organization (NGO) under the relevant laws and regulations of the country. We have obtained the necessary registrations and certifications to operate legally as a nonprofit organization.</p>
                 <h4>Other Important Registration</h4>
                 <p> <strong>Name of organisation:- </strong> NAVVKHUSH HELPING FOUNDATION, CCSDO</p>
                 <p><strong>Address:- </strong> 21/41-42, KALYAN PURI, NEW DELHI, DELHI, 110091</p>
                 <p><strong>Contact No:- </strong> 8287372178, 9311281717</p>
                 <p><strong>E-Mail:- </strong>INFO@THECRIMECONTROL.COM </p>
                 <p><strong>Date of Establishment:- </strong> 15TH OCT 2020</p>
                 <p><strong>Registration No:- </strong> 2325</p>
                 <p><strong>MSME No.:- </strong> UDYAM-DL-02-0045921</p>
                 <p><strong>PAN:- </strong> AACTC7828E</p>
                 <p><strong>NGO Darpan No:- </strong> DL/2021/0300598</p>
                 <p><strong>TAN:- </strong>DELC23076E </p>
                 <p><strong>80G:- </strong> AACTC7828EF20222</p>
                 <p><strong>12A:- </strong> AACTC7828EE20216</p>
                 <p><strong>TP ID:- </strong> TP160040</p>
              </Col>
              <Col lg={6} col={6} className="">
                 <h4>Donations/voluntary contributions are exempt under section :</h4>
                 <p>Tax Exemption: Navvkhush has been granted tax-exempt status by the appropriate authorities. Donations and contributions made to our organization are eligible for tax benefits as per the prevailing tax laws and regulations.</p>

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

       {/* SOCIAL VENTURES */}
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
       <Slide/>   

      </section>

      {/* ----------- advisor  --------- */}
      <section class="advisor">
        <Container className="container-fluid">
          <Heading title="Advisory Board Members" />

          <Row className="row advisor_row parlad_godara">
            <div className="col-md-3 ">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQFBMRpQt83rOg/feedshare-shrink_1280/0/1685792822184?e=1688601600&v=beta&t=3VUp7nvhzrAlYTNDmQWkwaSqbrCG3BwsVtgmuutbdt0"
                class="card-img-top w-100"
                alt=""
              />
            </div>

            <div className="col-md-9">
              <h3>Mr. Prahlad Godara</h3>
              <p>
                Mr. Godara is B. Com & Law Graduate from University of
                Rajasthan, Jaipur.{' '}
              </p>
              <p>
                He has worked over 3 decades with World 's number 1 two-wheeler
                company M/S Hero MotoCorp Ltd (formerly known as Hero Honda
                Motors Ltd) & retired as a Senior General Manager - Human
                Resource in Feb, 2020
              </p>

              <p>
                Post retirement he is working with Sh. Dushyant Chautala,
                Hon'ble Dy C M, Haryana Government as an Advisor to Chairman,
                Haryana Building & Construction Worker Welfare Board, Labour
                Dept He is very passionate to understand social engineering,
                social set{' '}
              </p>
              <p>
                up of our country & wish to work very closely with human beings.
              </p>
            </div>
          </Row>

          <Row className="row mt-5 advisor_row">
            <div className="col-md-9">
              <h3>Mr. Vijay Sharma</h3>
              <h6>
                Mr. Vijay Sharma serves as a Director of the Jindal Stainless.{' '}
              </h6>
              <p>
                With over 35 years of experience, Mr. Sharma has steered diverse
                roles in the areas of Corporate affairs, Sales, Distribution,
                Corporate Branding, Marketing & Business Development, Strategy
                Formulation, Supply Chain Management, Market research & Product
                development, Customer outreach & satisfaction in Stainless Steel
                & Automotive Industries. He also has been overseeing
                profitability of the Service center chains of the Jindal
                Stainless Group in India and in Spain.
              </p>
              <p>
                An able orator and an avid social media proponent, Mr. Sharma is
                a regular presenter in premium institutes, national &
                international webinars & conferences. His articles/ views on
                business situations are regularly published in various Industry
                magazines. He has been awarded multiple accolades for his
                contribution in Stainless Steel & Automotive Industry.
              </p>
              <p>
                He is also on the Board of companies like Indian Iron & Steel
                Skill Sector council, Shalimar paints, JSL Lifestyle. He is the
                Chairman – Haryana state Development Council of ASSOCHAM, Co
                Chair- Haryana State Chapter PHDCCI. He is member & actively
                participating in various initiatives of Apex Associations like
                FICCI, CII, ISA & ISSDA.
              </p>
            </div>
            <div className="col-md-3">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQGG2OTL4FMjdg/feedshare-shrink_800/0/1685792822165?e=1688601600&v=beta&t=t5MkSOIbYkBn1eqOmNvkq5LQuOXO0_iL5m6iSLb-ACY"
                class="card-img-top w-100"
                alt=""
              />
            </div>
          </Row>

          <Row className="row mt-5 advisor_row parlad_godara">
            <div className="col-md-3">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQEOcudcdWvFyw/feedshare-shrink_1280/0/1685794163800?e=1688601600&v=beta&t=D5IWYUKouar0o3Gq6n_d32HX-tXjZ1Iw3X7qqS5yAqo"
                class="card-img-top w-100"
                alt=""
              />
            </div>
            <div className="col-md-9">
              <h3>Sandeep Bhargava</h3>
              <p>
                Sandeep Bhargava - BE, MBA, With more than 40 years of National
                and International Experience in Corporate Affairs and Public
                Policy, Government Affairs, Enterprise Sales and Program
                Management. Major Companies worked in India and Europe: 
                Vodafone Idea Limited  Microsoft Corp  Nokia India  Nokia
                Siemens Networks  Hughes India Currently Senior Advisor at
                Telecom and Digital Health Companies and Investor & Mentor at
                Startups. Social Sector: Member Advisory Board of Sarthak since
                its inception and Vice President-National Abylimpics Association
                of India Advisory Board Member, Aambra Foundation Member
                Advisory Board at Samaagra Foundation.
              </p>
            </div>
          </Row>

          <Row className="row mt-5 advisor_row">
            <div className="col-md-9">
              <h3>PARUL KUMAR</h3>
              <p>
                “Happy people are truly grateful people. They focus on the best
                things that happen to them every single day. They see a miracle
                in the smallest aspects of life.”
              </p>

              <p>
                PARUL KUMAR, post graduate from LADY IRWIN COLLEGE, University
                of DELHI and holding a Management degree, has a multi-faceted
                personality having interest in Theatre and a passion for
                performing arts. She was actively involved in SPIC MACAY, where
                she was the National Treasurer. She organized more than 200
                classical concerts per
              </p>

              <p>
                year. She is a Kathak Dancer too. She has been part of many
                panel discussions on Youth Forum during college days on social
                issues. For past fifteen years she has worked intensively as a
                Social Entrepreneur, building inclusive and participatory
                society. It’s been a challenging yet satisfactory life
              </p>

              <p>
                She is the Co-founder of PRABHAAV FOUNDATION. This foundation is
                contributing in field of conscious living with focus on
                Environment, Education, Health and Culture through various CSR
                projects.
              </p>

              <p>
                In year 2021, She became the CEO of AK INSTITUTE OF
                OPHTHALMOLOGY, a state of an art Eye Hospital headed by Padma
                Shree Dr Atul Kumar.
              </p>
            </div>
            <div className="col-md-3">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQGMslFkApWd6w/feedshare-shrink_800/0/1685792822194?e=1688601600&v=beta&t=Y4MRpycVVAz9TTCs289fS93x6sEjtq-2gDtLEygs1Pg"
                class="card-img-top w-100"
                alt=""
              />
            </div>
          </Row>

          <Row className="row mt-5 advisor_row parlad_godara">
            <div className="col-md-3">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQENIy-UORHqAw/feedshare-shrink_800/0/1685000870580?e=1687996800&v=beta&t=VtimxBu8lnsNHUvJdSEwA2bxMf0FhtWld_9fiYUF7H4"
                class="card-img-top w-100"
                alt=""
              />
            </div>
            <div className="col-md-9">
              <h3>Ravi Sinha</h3>
              <p>
                A result-driven HR-professional with over 30 years of Industry
                experience, having expertise in creating and implementing
                programs to enhance global business operations
              </p>
              <p>
                With over 30 years of industry work experience as General
                Manager, HR, at Hero MotoCorp India, have played an extremely
                pivotal in guiding the organization to reach and maintain
                position of leadership
              </p>
              <p>
                Analyzed existing talent recruiting, sourcing and selection
                processes and developed , over the years, more efficient
                processes to improve quality of candidate selection and produce
                retention strategies that improve overall business efficiencies
                and acquisition costs
              </p>
              <p>
                Strategized global organizational policies and implemented
                change-management in line with organizational needs and overall
                business climate, including company-wide restructuring and
                reduction initiatives; implemented outplacement plans and
                focused on increasing employee morale after downsizing
              </p>
              <p>
                Planned, developed, implemented and institutionalized
                HR/Personnel Development policies, OD interventions, and
                industry best-practices
              </p>
              <p>
                Devised manpower training policies, implemented educational
                training programs, and educated management and business line
                leaders about legal compliance and employee best practices
              </p>
              <p>
                Provided consultancy services in the field of labor training and
                development, competency mapping, and L&D initiatives to the
                leading industry clients like Suzuki Motor Gujarat, Hero
                MotoCorp, etc
              </p>
            </div>
          </Row>
        </Container>
      </section>
        
        
      
    </>
  );
}
 