import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Heading from "../../common/Heading";


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

      </section>
      
    </>
  );
}
 