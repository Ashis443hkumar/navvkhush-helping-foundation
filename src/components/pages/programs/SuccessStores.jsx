import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Slide from "../../common/slide/Slide";

export default function SuccessStores() {
  return (
    <>
    {/* OUR PROGRAMS */}
    <section className="successStories">
     <Container className="">
          <Heading title="OUR PROGRAMS" />
        <Row>
          <Col xs={6} md={4} lg={4} className="text-center">
          <Card className="text-center">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/prg-3-1-1.png" alt=""  />
          <Card.Body>
            <Card.Text>
            Education for All: Our program ensures equal access to quality education for underprivileged children, empowering them with knowledge and skills for a better future.
            </Card.Text>
          </Card.Body>
          </Card>
          </Col>
          <Col xs={6} md={4} lg={4} className="text-center">
          <Card className="text-center">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/prg-3-1-1.png" alt="" />
          <Card.Body>
            <Card.Text>
            Health and Wellness: We provide healthcare services, including medical check-ups, immunizations, and health education, promoting the well-being of individuals and communities.
            </Card.Text>
          </Card.Body>
          </Card>
          </Col>
          <Col xs={6} md={4} lg={4} className="text-center">
          <Card className="text-center">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/prg-3-1-1.png" alt=""  />
          <Card.Body>
            <Card.Text>
            Sustainable Development: Our program focuses on environmental conservation, renewable energy, and community development projects to create a sustainable and thriving future for all.
            </Card.Text>
          </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      </section>

      {/* SUCCESS STORIES */}
      <section className="success_stores_team">
       <Container className="SUCCESS STORIES">
          <Heading title="SUCCESS STORIES" />
        <Row>
          <Col xs={6} md={4} lg={4} className="text-center">
            <Card className="text-center">
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/beneficial-opportunity-scaled.jpg" alt=""  />
            <Card.Body>
              <Card.Title>Children</Card.Title>
              <Link to="/" >KNOW MORE </Link>
            </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4} lg={4} className="text-center">
            <Card className="text-center">
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/WOMEN-ACHIEVER-AWARD.jpg" alt=""  />
            <Card.Body>
              <Card.Title>Children</Card.Title>
              <Link to="/" >KNOW MORE </Link>
            </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4} lg={4} className="text-center">
            <Card className="text-center">
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/aarti-1.jpg" alt=""  />
            <Card.Body>
              <Card.Title>Children</Card.Title>
              <Link to="/" >KNOW MORE </Link>
            </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </section>

      {/* event */}
      <section className="event">
      <Container>
        <Heading title="EVENTS" />
        <Row>
         <Col xs={12} lg={12} md={12}>
           <Heading title="FASHION FOR CAUSE" />
             <p>One of Lakshyam's highly esteemed and thriving initiatives is 'Fashion for a Cause,' held annually. This fundraising event serves a dual purpose: generating support from society and raising funds for existing and upcoming programs. Children from our centers proudly walk alongside renowned Fashion Icons, leveraging their influence to raise awareness about societal issues and the need for collective action. Each year, we strive to make it a bigger success, spreading Lakshyam's message while providing our children with exposure, confidence, and a memorable experience. We express heartfelt gratitude to all individuals participating in the fashion shows, enabling us to further our efforts.</p>
         </Col>
         <Col xs={12} lg={12} md={12} className="mt-4"> 
         <Row>
           <Col xs={12} lg={4} md={4}>
           <Card>
            <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/being-human.png" />
            <Card.Body className="text-center">
              <Card.Title>Fashion For A Cause 1</Card.Title>
              <Card.Text>
              Bollywood heartthrob, Salman Khan and his charitable trust, Being Human..
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} lg={4} md={4}>
           <Card>
            <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/being-human.png" />
            <Card.Body className="text-center">
              <Card.Title>Fashion For A Cause 1</Card.Title>
              <Card.Text>
              Bollywood heartthrob, Salman Khan and his charitable trust, Being Human..
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} lg={4} md={4}>
           <Card>
            <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/being-human.png" />
            <Card.Body className="text-center">
              <Card.Title>Fashion For A Cause 1</Card.Title>
              <Card.Text>
              Bollywood heartthrob, Salman Khan and his charitable trust, Being Human..
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          </Col>
         </Row>   

         </Col>
        </Row>
       </Container>
      </section>

 

      {/* OTHER EVENTS */}
      <section className="my-4 other_event">
       <Container>
         <Heading title="OTHER EVENTS" />
        <Row>
         <Col xs={12} lg={12} md={12}> 
          <h3>Periodt Campaign</h3>
          <Slide/>
         </Col>
         <Col xs={12} lg={12} md={12}>
           <p>Lakshyam took the initiative to organize a social media campaign called 'PeriodT - Making periods a non-issue' with the aim of normalizing conversations about menstruation. On National Period Day, we launched this campaign across our social media platforms, encouraging our audience to share myths about periods that they wanted to debunk. The campaign shed light on alarming statistics regarding the impact of menstruation in our country: [Include specific statistics or provide the intended content to be highlighted].</p>
           <ul>
             <p>Lakshyam's 'PeriodT - Making periods a non-issue' social media campaign highlighted concerning statistics surrounding menstruation in our country:</p>
             <li>Every year, 23 million girls drop out of school due to periods.</li>
             <li>Approximately 42.4% of women lack access to any form of sanitary pads.</li>
             <li>87% of women still adhere to taboos and refrain from entering the kitchen and temples during their periods.</li>
             <li>56% of women feel embarrassed to use pads in public.</li>
             <li>Shockingly, 64% of women resort to burning or burying their used pads.</li>
             <li>Lack of access to menstrual hygiene is the 5th leading cause of death globally.</li>
             <p>These statistics emphasize the urgency of addressing menstrual hygiene challenges and working towards creating a society where menstruation is normalized, and every woman has access to safe and hygienic menstrual products</p>
           </ul>
           <p>Through this campaign, Lakshyam wanted to put a full stop and debunk all the myths surrounding menstrual hygiene. With this campaign, Lakshyam also aimed to raise funds to spread awareness about menstrual hygiene, distribute safe menstrual absorbents and help girls continue their schooling and become financially independent. The idea of the campaign was originated when we saw our women in rural areas of Jharkhand & Madhya Pradesh considering themselves impure & during our skill training program, they would not touch the sewing machines saying they are untouchables! We were happy to see that more than 500 individuals shared their entries via messages to stand with the cause. Not just the individuals but schools & colleges participated as institutions followed by 10 digital media influencers.</p>
         </Col>
        </Row>
       </Container>
      </section>

      {/* WEBINAR */}
      <section className="">
       <Container>
       <Heading title="WEBINAR" />
        <Row>
         <Col xs={12} lg={12} md={12}>
           <h4>GLOBAL VIRTUAL SUMMIT: Women Leading in the Time of Crisis</h4>
           <p>Covid- 19 has had a huge impact on all of us, no matter from which sections of the society you come from. To cope up with this crisis and to help the women of the society in this pandemic, Lakshyam has expanded its mission of empowering women by organising an exclusive 5 hours of powerful online session of Global Virtual Summit – “Women of India leading in time of crisis”.</p>

           <p>For this summit, Lakshyam partnered with USA based organisation “The Women Ambassadors Forum (WAF)’ with prominent celebrities and influential speakers. 25 Prominent Indian Leaders from 7 different countries participated in this summit.</p>

           <Row>
            <Col xs={12} lg={4} md={4}>
               <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/newsletter-1.png" className="w-100" alt="" />
            </Col>
            <Col xs={12} lg={4} md={4}>
               <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/newsletter-1.png" className="w-100" alt="" />
            </Col>
            <Col xs={12} lg={4} md={4}>
               <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/newsletter-1.png" className="w-100" alt="" />
            </Col>
            <Col xs={12} lg={6} md={6}> </Col>
          </Row>

         </Col>
        </Row>
       </Container>
      </section>
    </>
  );
}
 