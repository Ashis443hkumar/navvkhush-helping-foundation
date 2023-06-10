import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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

        <section className="">
          <Container>
            <Heading title="AWARDS & RECOGNITION" />
            <Row>
              <Col xs={12} md={12} lg={12}>
                <Tabs
                  defaultActiveKey="2023"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3 text-center"
                >
                {/* <Tab eventKey="2023" title="2023">
                  Tab content for 2023
                </Tab> */}
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
                      <li></li>
                    </ul>
                  </div>
                </Tab>
              </Tabs>

              </Col>
            </Row>
          </Container>
        </section>




        
      
    </>
  );
}
