
import React,{useState} from "react";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Model(){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>

      <Container>
        <h1>Other ways to donate</h1>
       <Row>
         <Col xs={12} lg={12} md={12}> 
         <Button variant="" onClick={handleShow}>
           <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/donate-1.png" alt="" />
           <p> Bank Transfer </p>
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
          </Modal.Footer>
        </Modal>
         </Col>
         
         <Col xs={12} lg={12} md={12}>
          <h4>Guidelines</h4>
          <ul>
            <li>As per Indian Tax Laws, it is mandatory to have full name and address of the contributor else it will be treated as anonymous and will be subject to taxation.</li>
            <li>In case you have a foreign address, we will need your passport copy as advised by the FCRA, 2010.</li>
            <li>For any queries, write to us on support@lakshyam.co.in or call on 011-40747172</li>
            <li>All Indian contributions made to LAKSHYAM are eligible for tax deduction of 50% u/s 80G of the Income Tax Act 1961.</li>
          </ul>
         </Col>

       </Row>
      </Container>

      

    </>
  )
}