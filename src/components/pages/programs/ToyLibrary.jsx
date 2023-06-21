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
import Sdg from "../home/Sdg";

export default function ToyLibrary() {
  return (
    <>
        <section className="butteryFlay_section">
        <Container>
          <Heading title="LAKSHYAM TOY LIBRARY" />
          <Row className="mt-5">
            <Col xs={12} md={6} lg={6}>
              
              <p>Child Protection: The Butterfly program prioritizes the safety and protection of children, working to prevent child abuse, neglect, and exploitation.</p>
              <p>Quality Education: We ensure access to quality education for children, focusing on improving school infrastructure, providing learning materials, and enhancing teaching methodologies.</p>
              <p>Health and Nutrition: Our program emphasizes the importance of good health and nutrition for children, providing medical check-ups, hygiene education, and nutritious meals.</p>
              <p>Emotional Support: We offer counseling and emotional support to children, addressing their psychological well-being and helping them overcome trauma or difficult circumstances.</p>
              <p>Skill Development: The Butterfly program equips children with essential life skills, vocational training, and entrepreneurship education to enhance their future prospects.</p>
              <p>Parental and Community Engagement: We actively involve parents and the community in supporting children's welfare and education, fostering a strong support network.</p>
    
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/Toy-Library-Main-Picture.jpg" alt="" />
            </Col>
          </Row>
        </Container>

      </section>
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
      
      <section className="buttry_flowChat">
        <Container>
          <Row className="mt-5">
            <Col xs={12} md={6} lg={6} className="lowChat_title" >
              <h4>Flow chart of activities carried under our program:</h4>
            <Row>
              <Col xs={12} lg={6} md={6} className="card_border"> 
                <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/Butterfly-prog-Flowchart.jpg" alt="" className="w-100" />
              </Col>
            </Row>
            </Col>
            <Col xs={12} md={6} lg={6} className="lowChat_title" >
              <h4>Program Expenses:</h4>
            <Row>
              <Col xs={12} lg={6} md={6}  className="card_border"> 
                <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/Butterfly-prog-Flowchart.jpg" alt="" className="w-100" />
              </Col>
            </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <Sdg/>

    </>
  );
}
 