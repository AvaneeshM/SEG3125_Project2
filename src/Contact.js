import logo from './logo.svg';
import './Home.css';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link } from "react-router-dom";

function Contact() {
  return (
    <>
    <div className="contactPage">
        
        <div>
        <div>
        <iframe className='field' title="Geegees Field" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11202.665524010668!2d-75.665294!3d45.4160667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb2472a8329738a37!2sGee-Gees%20Field!5e0!3m2!1sen!2sca!4v1656449435264!5m2!1sen!2sca" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="text-2">
        <Row xs={1} md={2} className="g-3">

<Col>

        <Card>
      <Card.Header as="h5">Geegees Field</Card.Header>
      <Card.Body>
        <Card.Title>Address: 200 Lees Ave, Ottawa, ON K1S 5S9</Card.Title>
        <Card.Text>
            Hours:
            <br></br>
             Mon - Sat
            <br></br>
            8:00 AM To 9:00 PM
          </Card.Text>
          <Link to="/rentals"><button className="btn-contact">
                          Book A Field
                      </button>
                      </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>

        <Card>
      <Card.Header as="h5">Supervisor</Card.Header>
      <Card.Body>
        <Card.Title>John Smith</Card.Title>
        <Card.Text>
          Phone Number: 416-123-4123
          <br></br>
            Email: JSmith@OttawaFC.ca
            <br></br>
            Fax: 416-221-4121
            <br></br>
          </Card.Text>
          <a href="mailto:someone@yoursite.com">Email Us</a>
      </Card.Body>
    </Card>
    </Col>
    </Row>
          </div>
          </div>
    </div>

    <div className="contactPage">
        
        <div>
        <div>
          <iframe className='field' title="Mark Anthony Field" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11201.755005169041!2d-75.6768731!3d45.4206562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46aef108992dffd5!2sMatt%20Anthony%20Field!5e0!3m2!1sen!2sca!4v1656453800717!5m2!1sen!2sca" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="text-2">
        <Row xs={1} md={2} className="g-3">
          <Col>

        <Card>
      <Card.Header as="h5">Matt Anthony Field</Card.Header>
      <Card.Body>
        <Card.Title>Address:  801 King Edward, Ottawa, ON K1N 6N5</Card.Title>
        <Card.Text>
            Hours:
            <br></br>
             Mon - Sat
            <br></br>
            8:00 AM To 9:00 PM
          </Card.Text>
          <Link to="/rentals"><button className="btn-contact">
                          Book A Field
                      </button>
                      </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>

        <Card>
      <Card.Header as="h5">Supervisor</Card.Header>
      <Card.Body>
        <Card.Title>Ryan Dave</Card.Title>
        <Card.Text>
          Phone Number: 416-342-5412
          <br></br>
            Email: RDave@OttawaFC.ca
            <br></br>
            Fax: 416-221-4121
            <br></br>
          </Card.Text>
          <a href="mailto:someone@yoursite.com">Email Us</a>
      </Card.Body>
    </Card>
    </Col>
    </Row>
          </div>
          </div>
    </div>


    <div className="contactPage">
        
        <div>
        <div>
        <iframe className='field' title="Saint Laurent Field" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11198.629511081752!2d-75.66054366044918!3d45.436407599999974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a018bd40bb%3A0x942f3682796b425!2sSt%20laurent%20soccer%20field!5e0!3m2!1sen!2sca!4v1656454369222!5m2!1sen!2sca" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="text-2">
        <Row xs={1} md={2} className="g-3">
          <Col>

        <Card>
      <Card.Header as="h5">Saint Laurent Field</Card.Header>
      <Card.Body>
        <Card.Title>Address: 815 St. Laurent Blvd, Ottawa, ON K1K 3A7</Card.Title>
        <Card.Text>
            Hours:
            <br></br>
             Mon - Sat
            <br></br>
            8:00 AM To 9:00 PM
          </Card.Text>
          <Link to="/rentals"><button className="btn-contact">
                          Book A Field
                      </button>
                      </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>

        <Card>
      <Card.Header as="h5">Supervisor</Card.Header>
      <Card.Body>
        <Card.Title>Tom Donald</Card.Title>
        <Card.Text>
          Phone Number: 416-452-4180
          <br></br>
            Email: JSmith@OttawaFC.ca
            <br></br>
            Fax: 416-221-4121
            <br></br>
          </Card.Text>
        <a href="mailto:someone@yoursite.com">Email Us</a>
      </Card.Body>
    </Card>
    </Col>
    </Row>
          </div>
          </div>
    </div>
    </>
  );
}

export default Contact;