
import React,{useState} from "react";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./style.css"

export default function Model(){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showw, setShoww] = useState(false);
  const handleCloset = () => setShoww(false);
  const handleShoww = () => setShoww(true);

  return(
    <>

      <Container>
        <h3>Other ways to donate</h3>
       <Row>
         <Col xs={12} lg={3} md={3} > 
          <Button variant="" onClick={handleShow}>
           <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/donate-1.png" alt="" />
           <p> Bank Transfer </p>
         </Button>
           <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton >
            <Modal.Title>Bank Transfer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Name:- </strong>Crime Control & Social Development Organisation</p>
            <p><strong>Bank Name:- </strong> RBL Bank Limited </p>
            <p><strong>Account:- </strong> 408287372178</p>
            <p><strong>IFSC Code:- </strong> RATN0000114</p>
            <p><strong>Branch:- </strong> Noida, Sector - 18</p>
          </Modal.Body>
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
            <li>In case you have a foreign address, we will need your passport copy as advised.</li>
            <li>For any queries, write to us on info@thecrimecontrol.com or call on +91 9971725342</li>
            <li>All Indian contributions made to navvkhush are eligible for tax deduction.</li>
          </ul>
         </Col>

       </Row>
      </Container>

      

    </>
  )
}