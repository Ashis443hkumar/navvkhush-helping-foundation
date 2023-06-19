import React,{useState} from "react";
import { Container } from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function DonateBillAddress() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    
    <Container>
      <Row>
        <Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-0 py-0">
        <Form.Group as={Col} md="6" controlId="validationCustom01" className="py-3" >
          <Form.Label>Ammount</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="ammount"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02" className="py-3" >
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="number "
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02" className="py-2" >
          <Form.Label>Full name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02" className="py-2" >
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="email address"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02" className="py-2" >
          <Form.Label>Pan Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02" className="py-2" >
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Row className="mb-3 py-3">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Purpose:*</Form.Label>
          <Form.Control type="text" placeholder="Sponsor A Child" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      {/* <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group> */}
      <div className="donate_bill_applay">
         <Button className="textTcenter col-lg-2" type="submit">Pay Now</Button>
      </div>
    </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DonateBillAddress;