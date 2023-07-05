
import React,{useState } from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DebitCard(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
     <section className="">
     <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

       <Container>
         <p>Add New Card</p>
        <Row>
         <Col xs={12} lg={8} md={8}> 
         <span>Card Number</span>
           <input type="number"/>
         </Col>
         <Col xs={12} lg={4} md={4}>
            <input type="number"/>
         </Col>
        </Row>
        <Row>
         <Col xs={12} lg={8} md={8}> 
           <input type="number"/>
         </Col>
         <Col xs={12} lg={4} md={4}>
            <input type="number"/>
         </Col>
        </Row>
       </Container>
      </section>

 
    </>
  )
}