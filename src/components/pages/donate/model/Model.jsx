
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
        <h1>Other ways to donate</h1>
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
            <p><strong>Name : </strong>  Lakshyam</p>
            <p><strong>Account :</strong> 915010013423887</p>
            <p><strong>IFSC Code :</strong> UTIB0000015</p>
            <p><strong>Bank Name :</strong> Axis</p>
            <p><strong>Branch : </strong>  Green park, New Delhi</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
        
        <Col xs={12} lg={3} md={3} > 
          <Button variant="" onClick={handleShoww}>
           <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/donate-1.png" alt="" />
           <p> paytm Transfer </p>
         </Button>
           <Modal  showw={showw} onHide={handleCloset} >
          <Modal.Header closeButton >
            <Modal.Title>paytm Transfer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Name : </strong>  Lakshyam</p>
            <p><strong>Account :</strong> 915010013423887</p>
            <p><strong>Bank Name :</strong> Axis</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloset}>
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