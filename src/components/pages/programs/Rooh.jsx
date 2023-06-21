import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Heading from "../../common/Heading";
import Slide from "../../common/slide/Slide";
import Sdg from "../home/Sdg";


export default function Rooh() {
  return (
    <>
        <section className="butteryFlay_section">
        <Container>
          <Heading title="ROOH - AWAKENING WOMEN'S SOUL" />
          <Row className="mt-5">
            <Col xs={12} md={6} lg={6}>
              <p>To think of living with almost no control and freedom over one’s own life is quite a suffocating thing. Women in India have to endure many ordeals in their day-to-day lives. For centuries, women of all generations have had to struggle to be treated as equals. At present, thousands of women in India are marginalized and poorly treated within society resulting in a lack of the skills and confidence needed to live fulfilled and respectable lives. Currently, a staggering 245 million women across India are unable to read or write. This severely limits their position and opportunities available to them within the society.</p>
              <p>That is why Lakshyam – NGO for women empowerment, stepped in to create an impact by changing the lives of women by creating set goals and training sessions to make them self-sustainable in life.</p>
           
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/Rooh-Main-Picture.jpg" alt="" />
            </Col>
          </Row>
        </Container>
        <section className="buttryimapct">
        <Container>
          <Heading title="Impact numbers" />
          <Row className="mt-5">
            <Col xs={12} md={3} lg={3} className="buttryimapct_desc" >
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" alt=""/>
              <div className="">
                <p>58,000 children from 75 Govt. schools benefitted</p>
              </div>
            </Col>
            <Col xs={12} md={3} lg={3} className="buttryimapct_desc" >
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" alt=""/>
              <div className="">
                <p>58,000 children from 75 Govt. schools benefitted</p>
              </div>
            </Col>
            <Col xs={12} md={3} lg={3} className="buttryimapct_desc" >
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" alt=""/>
              <div className="">
                <p>58,000 children from 75 Govt. schools benefitted</p>
              </div>
            </Col>
            <Col xs={12} md={3} lg={3} className="buttryimapct_desc" >
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" alt=""/>
              <div className="">
                <p>58,000 children from 75 Govt. schools benefitted</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


  


           {/* STORIES OF CHANGE */}
     <section className="home_stori_Chnage" >
        <Container className="py-2 mt-0">
        <Heading title="SUCCESS STORIES"  />
        <Row>
          <Col xs={12} md={12} lg={12} className="">
            <p>We are delighted to introduce some of Navvkhush Bharat exceptionally brilliant and bright children who have triumphed over tremendous adversities and hold a special place in our hearts. These remarkable young individuals have reshaped their destinies through their unwavering determination and hard work. Their zest for life serves as a constant inspiration, motivating us to provide them with the finest resources and opportunities.</p>
         
          </Col>
        </Row>
        </Container>
        <Slide/>
     </section>

      </section>
      
    </>
  );
}
 