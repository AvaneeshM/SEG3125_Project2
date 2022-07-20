
import stadium from "./images/Stadium.jpg"
import './CheckoutP.css';
import {Link } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CheckoutP() {
  return (
    <>
    <div className="pCheckout">
        <h1 className="T">
            Program Checkout
        </h1>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter Full Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Birthday</Form.Label>
        <Form.Control required type="text" placeholder="Enter Birthday" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control required type="number" placeholder="Enter Phone Number" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Credit Card Number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>EXP</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="EXP"
          />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>CVV</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="CVV"
          />
          </Form.Group>
          </Row>
          <Form.Label>Total:</Form.Label>
          <Form.Control
          
        type="text"
        placeholder="$0.00"
        aria-label="Disabled input example"
        disabled
        readOnly
      />

      <Button variant="test" type="submit">
        Checkout
      </Button>
    </Form>


    </div>
          </>


  );
}

export default CheckoutP;