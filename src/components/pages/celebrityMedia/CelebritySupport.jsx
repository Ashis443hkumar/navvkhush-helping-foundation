import React from "react";
import Heading from "../../common/Heading";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Slide from "../../common/slide/Slide";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'

export default function CelebritySupport(){
  return (
     <>

        <section className="card_listname mt-5 ">
          <Container>
            <Heading  title="CELEBRITY SUPPORT" subtitle="We thank all the wonderful celebrities and leaders who have associated with Lakshyam by participating in our events, workshops and even donated with their heart and might. We are happy to have been associated with some prominent personalities in different fields of work.
            There is no way we would have come this far without them." />
            <Row className="mt-5 pt-4">
              <Col xs={12} md={10} lg={9}  className="mx-auto g-0 ">
                <Row className="d-flex g-0 ">
                <Col xs={12} md={6} lg={4}>
              <Card >
              <Card.Header className="text-center">CELEBRITY</Card.Header>
              <Card.Body className="card_body-content">
                <ul>
                  <li>SALMAN KHAN</li>
                  <li>RANBIR KAPOOR</li>
                  <li>PRIYANKA CHOPRA</li>
                  <li>ANUPAM KHER</li>
                  <li>BOMAN IRANI</li>
                  <li>SONU NIGAM</li>
                  <li>ROHIT ROY</li>
                  <li>NEERAJ GABA</li>
                  <li>SHAHNAZ HUSSAIN</li>
                  <li>RAJEEV KHANDELWAL</li>
                  <li>JACQUELINE FERNANDEZ</li>
                  <li>MUGHDA GODSE</li>
                  <li>SHRIYA SARAN</li>
                  <li>TUSHAR KAPOOR</li>
                  <li>CYRUS SAHUKAR</li>
                  <li>TAPASEE PANU</li>
                  <li>JIMMY SHERGILL</li>
                </ul>
               </Card.Body>
              </Card>
              </Col>

              <Col xs={12} md={6} lg={4}>
              <Card >
              <Card.Header className="text-center">LEADERS OF INDIA</Card.Header>
              <Card.Body className="card_body-content">
                <ul>
                  <li>DR. FAROOQ ABDULLAH</li>
                  <li>SRIMATI SHEELA DIXIT</li>
                  <li>SHRI NARENDRA MODI</li>
                  <li>SHRI PRANAB MUKHERJEE</li>
                </ul>
              </Card.Body>
              </Card>
              </Col>

              <Col xs={12} md={6} lg={4}>
              <Card >
              <Card.Header className="text-center">DESIGNERS</Card.Header>
              <Card.Body className="card_body-content">
                <ul>
                  <li>SALMAN KHAN</li>
                  <li>RANBIR KAPOOR</li>
                  <li>PRIYANKA CHOPRA</li>
                  <li>ANUPAM KHER</li>
                  <li>BOMAN IRANI</li>
                  <li>SONU NIGAM</li>
                  <li>ROHIT ROY</li>
                  <li>NEERAJ GABA</li>
                  <li>SHAHNAZ HUSSAIN</li>
                  <li>RAJEEV KHANDELWAL</li>
                  <li>JACQUELINE FERNANDEZ</li>
                  <li>MUGHDA GODSE</li>
                  <li>SHRIYA SARAN</li>
                  <li>TUSHAR KAPOOR</li>
                  <li>CYRUS SAHUKAR</li>
                  <li>TAPASEE PANU</li>
                  <li>JIMMY SHERGILL</li>
                </ul>
              </Card.Body>
              </Card>
              </Col>
             </Row>

              </Col>  
            </Row>

          </Container>
        </section>
      
      <Slide/>


      <section  className="celebrity_media">
       <Container>
        <Heading title="Media" />
        <Row className="mb-3 mx-auto text-center">
          <Col xs={6} md={12} lg={12} className="">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 mx-auto text-center main_head_title"
            justify
          >
           <Tab eventKey="Print Media" title="Print Media" className="text-center ">
              <Slide/>
           </Tab>

           <Tab eventKey="Online_Media" title="Online Media" className="text-start mt-4  gtetry">
              <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3 mt-4" justify
                >
                  <Tab eventKey="Lakshyam Story" title="Lakshyam Story " className="thrtghrt">
                    <ul>
                      <li>A Catalyst for Change – Lakshyam and Ircon International Ltd’s Rooh Program Uplifts Women in Umri Village, Madhya Pradesh</li>
                      <li>Distribution of Solar Lamps & Ration Kits in collaboration with Binomo</li>
                      <li>Lakshyam helping women change their lives by providing skilled based training & jobs</li>
                      <li>Lakshyam NGO Uplifting at-risk communities through education and employment</li>
                    </ul>
                  </Tab>
                  <Tab eventKey="Founder’s Story" title="Founder’s Story" className="thrtghrt">
                    <ul>
                      <li>How Rashi Anand is transforming the lives of street children and women with her NGO</li>
                      <li>Lakshyam NGO has‌ ‌positively‌ ‌impacted‌ ‌the‌ ‌lives‌ ‌of‌ ‌more‌ ‌than‌ ‌7‌ lakh‌ women‌ ‌and ‌ ‌children‌ ‌in‌ ‌India,‌ ‌directly‌ ‌or‌ ‌indirectly</li>
                      <li>Feel Good Factor August 09 2020</li>
                      <li>From Educating Street Children To Creating Livelihood For Their Mothers, This Social Entrepreneur Is Transforming Lives</li>
                      <li>This social entrepreneur stepped in to help destitute women and children during the coronavirus pandemic</li>
                      <li>When Covid leads to aggression</li>
                      <li>Rashi Anand: Helping children with her NGO</li>
                      <li>Rashi Anand Recalls A Trafficked Woman’s Visit That Awoke An Activist In Her</li>
                      <li>Celebrating National Girl Child Day With These 7 Girls Who Made Us Proud</li>

                    </ul>
                  </Tab>
                  <Tab eventKey="Fashion for a cause" title="Fashion for a cause" className="thrtghrt">
                  <ul>
                      <li>How Rashi Anand is transforming the lives of street children and women with her NGO</li>
                      <li>Lakshyam NGO has‌ ‌positively‌ ‌impacted‌ ‌the‌ ‌lives‌ ‌of‌ ‌more‌ ‌than‌ ‌7‌ lakh‌ women‌ ‌and ‌ ‌children‌ ‌in‌ ‌India,‌ ‌directly‌ ‌or‌ ‌indirectly</li>
                      <li>Feel Good Factor August 09 2020</li>
                      <li>From Educating Street Children To Creating Livelihood For Their Mothers, This Social Entrepreneur Is Transforming Lives</li>
                      <li>This social entrepreneur stepped in to help destitute women and children during the coronavirus pandemic</li>
                      <li>When Covid leads to aggression</li>
                      <li>Rashi Anand: Helping children with her NGO</li>
                      <li>Rashi Anand Recalls A Trafficked Woman’s Visit That Awoke An Activist In Her</li>
                      <li>Celebrating National Girl Child Day With These 7 Girls Who Made Us Proud</li>

                    </ul>
                  </Tab>
                  <Tab eventKey="Delhi Primes" title="Delhi Primes" className="thrtghrt">
                   <ul>
                      <li>A Catalyst for Change – Lakshyam and Ircon International Ltd’s Rooh Program Uplifts Women in Umri Village, Madhya Pradesh</li>
                      <li>Distribution of Solar Lamps & Ration Kits in collaboration with Binomo</li>
                      <li>Lakshyam helping women change their lives by providing skilled based training & jobs</li>
                      <li>Lakshyam NGO Uplifting at-risk communities through education and employment</li>
                     </ul>
                  </Tab>
                  <Tab eventKey="Others" title="Others" className="thrtghrt" >
                  <ul>
                      <li>How Rashi Anand is transforming the lives of street children and women with her NGO</li>
                      <li>Lakshyam NGO has‌ ‌positively‌ ‌impacted‌ ‌the‌ ‌lives‌ ‌of‌ ‌more‌ ‌than‌ ‌7‌ lakh‌ women‌ ‌and ‌ ‌children‌ ‌in‌ ‌India,‌ ‌directly‌ ‌or‌ ‌indirectly</li>
                      <li>Feel Good Factor August 09 2020</li>
                      <li>From Educating Street Children To Creating Livelihood For Their Mothers, This Social Entrepreneur Is Transforming Lives</li>
                      <li>This social entrepreneur stepped in to help destitute women and children during the coronavirus pandemic</li>
                      <li>When Covid leads to aggression</li>
                      <li>Rashi Anand: Helping children with her NGO</li>
                      <li>Rashi Anand Recalls A Trafficked Woman’s Visit That Awoke An Activist In Her</li>
                      <li>Celebrating National Girl Child Day With These 7 Girls Who Made Us Proud</li>
                    </ul>
                  </Tab>
                </Tabs>
            </Tab>

            <Tab eventKey="Electronic Media" title="Electronic Media" className="">
              <Slide/>
            </Tab>

          </Tabs>
          </Col>
       
        </Row>
      </Container>
      </section>

     



    </>
  );
}
 