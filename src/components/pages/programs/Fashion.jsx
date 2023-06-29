import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Card from 'react-bootstrap/Card';

export default function Fashion() {
  return (
    <>
    {/* OUR PROGRAMS */}
    <section className="successStories">
     <Container className="">
          <Heading title="fashion designing structure" />
        <Row>
          <Col xs={6} md={4} lg={4} className="text-center">
          <Card className="text-center">
          <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.70Q6MNzpABlzcahtqSd_HAHaJx&pid=Api&P=0&h=180" />
          <Card.Body>
            <Card.Title>Design Sketches and Illustrations</Card.Title>
            <Card.Text>
              <ul>
                <li>Designers create detailed sketches and illustrations of their design ideas.</li>
                <li>These sketches showcase the silhouette, proportions, and key details of the garments or accessories.</li>
                <li>Designers consider various fabrics, trims, and materials suitable for their designs.</li>
              </ul>
            </Card.Text>
          </Card.Body>
          </Card>
          </Col>
          <Col xs={6} md={4} lg={4} className="text-center">
          <Card className="text-center">
          <Card.Img variant="top" src="https://tse2.mm.bing.net/th?id=OIP.WyAKUgrgbAwZDqSFsIaAsgHaFA&pid=Api&P=0&h=180" />
          <Card.Body>
          <Card.Title>Pattern Making</Card.Title>
            <Card.Text className="text-center">
              <ul>
                <li>Once the design concept is finalized, designers create patterns to bring their designs to life.</li>
                <li>They use specialized software or work with pattern makers to develop accurate patterns that will be used as templates for cutting fabric.</li>
              </ul>
            </Card.Text>
          </Card.Body>
          </Card>
          </Col>
          <Col xs={6} md={4} lg={4} className="text-center">
          <Card className="text-center">
          <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.o4tLYZoFSwG-8ebo6ksk6wHaI7&pid=Api&P=0&h=180" />
          <Card.Body>
          <Card.Title>Presentation and Marketing</Card.Title>
            <Card.Text>
            <ul>
              <li>Designers prepare their collection for showcasing through various mediums like fashion shows, lookbooks, or presentations.</li>
              <li>They develop marketing strategies to promote their designs and attract buyers or clients.</li>
            </ul>
            </Card.Text>
          </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      </section>

    
    </>
  );
}
 