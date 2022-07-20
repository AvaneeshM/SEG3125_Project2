import logo from './logo.svg';
import './pCheckout';
import Form from 'react-bootstrap/Form';
import {Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Rentals() {
  return (
    <div className="Rentals">

<div className="pCheckout">
        <h1 className="T">
            Book a Field
        </h1>
        
        <Form>

        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Choose A Field</Form.Label>
          <Form.Select aria-label="Default select example">
          <Form.Control required />
            <option>Pick A Field</option>
            <option value="1">Geegees Field</option>
            <option value="2">Marc Anthony Field</option>
            <option value="3">Saint Laurent Field</option>
            </Form.Select>
            </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Required Services</Form.Label>
          <Form.Select aria-label="Default select example">
          <Form.Control required />
            <option>Pick A Service</option>
            <option value="1">Team Practice: (Cones,Netting) </option>
            <option value="2">Games: (Will Provide Referees)</option>
            <option value="3">None</option>
            </Form.Select>
            </Form.Group>

            <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
        <Form.Label>Choose Date</Form.Label>
        <Form.Control required type="date" name='book_date' />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
        <Form.Label>Choose Time</Form.Label>
        <Form.Control required type="time" name='book_date' />
        </Form.Group>
        </Row>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter Full Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" placeholder="Name@example.com" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control required type="text" placeholder="Enter Phone Number" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Credit Card Number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>EXP</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="EXP"
          />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>CVV</Form.Label>
          <Form.Control
            required
            type="text"
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
    </div>
  );
}

export default Rentals;