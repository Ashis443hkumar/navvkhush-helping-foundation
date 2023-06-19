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
            Lakshyam’s Butterfly Program aims to provide comprehensive assistance to impoverished children through a learning program focusing on textual and practical knowledge as well as personality development.
            </Card.Text>
            <Link to="/" >Read More</Link>
          </Card.Body>
          </Card>
          </Col>
          <Col xs={6} md={4} lg={4} className="text-center">
          <Card className="text-center">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/prg-3-1-1.png" alt="" />
          <Card.Body>
            <Card.Text>
            Lakshyam’s Butterfly Program aims to provide comprehensive assistance to impoverished children through a learning program focusing on textual and practical knowledge as well as personality development.
            </Card.Text>
            <Link to="/" >Read More</Link>
          </Card.Body>
          </Card>
          </Col>
          <Col xs={6} md={4} lg={4} className="text-center">
          <Card className="text-center">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/prg-3-1-1.png" alt=""  />
          <Card.Body>
            <Card.Text>
            Lakshyam’s Butterfly Program aims to provide comprehensive assistance to impoverished children through a learning program focusing on textual and practical knowledge as well as personality development.
            </Card.Text>
            <Link to="/" >Read More</Link>
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
             <p>‘Fashion for a Cause’ is one of Lakshyam’s most illustrious and thriving initiatives that is held every year. Our annual fundraising initiative has a twofold objective that aims at garnering support from the society, and raising funds for the existing programs and the ones in the pipeline. Children from our centres walk hand-in-hand with the most prestigious Fashion Icons of our country. Owing to the acclaimed status of the guests, we are able to raise awareness in the public eye of the issues plaguing our society and the urgent need for each one of us to do our bit.  Every year, we not only try to make it a bigger success that spreads the message of Lakshyam, but also ensure that our kids experience immense exposure and confidence from the initiative, and have a gala time. We wholeheartedly thank every individual that takes part in the fashion shows, and thus enabling us to advance our endeavours.</p>
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
         <Row className="my-4">
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

      {/* DELHI PRIMES */}
      <section className="">
       <Container>
         <Heading title="DELHI PRIMES" />
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
           <p>Lakshyam organized a social media campaign ‘PeriodT – Making periods a non-issue’ with a belief and idea to normalize talking about periods. On the occasion of National Period Day, we launched this campaign on all our social media handles urging our audience to describe a myth related to periods that they want to burst. We witnessed some shocking statistics related to the impact of menstruation on our country:</p>
           <ul>
             <li>23 million girls drop out every year due to periods.</li>
             <li>Around 42.4% of women don’t have access to any kind of sanitary pads</li>
             <li>87% of women still believe in taboos and don’t enter the kitchen and temples due to periods</li>
             <li>56% of women are shy to use pads in public</li>
             <li>64% of women burn or bury their used pads</li>
             <li>No access to menstrual hygiene is the 5th biggest killer in the world.</li>
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
 