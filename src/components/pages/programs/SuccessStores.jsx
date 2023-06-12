import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function SuccessStores() {
  return (
    <>
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

      <section className="success_stores_team">
     <Container className="SUCCESS STORIES">
          <Heading title="OUR PROGRAMS" />
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

      
    </>
  );
}
 