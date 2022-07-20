
import stadium from "./images/Stadium.jpg"
import './Home.css';
import {Link } from "react-router-dom";
import Geegees from "./images/Geegees.jpg";
import Mattanthony from "./images/Mattanthony.jpg";
import Saintlaurent from "./images/Saintlaurent.jpg"
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <>
    <div className="Banner">
    <a href="/French"> Francais </a>
    </div>
    <div className="Home">
          <div>
              <img src={stadium} className="stadium" alt="logo" />
          </div>
          <div className="text">
          <br></br>
          <br></br>
          <div classname="HomeTitle">
    <h1 >Welcome To Ottawa FC</h1>
    </div>
              <p>
                  Founded in 1990 Ottawa FC strives to create world class players through its strong programs offered to those of any skill level.
                  We also provide private field bookings for those who want to organize their own soccer games.
              </p>
              <div className="buttons">
                  <div className="hButton">
                      <Link to="/program"><button className="btn">
                          View Programs
                      </button>
                      </Link>

                      <Link to="/rentals"><button className="btn">
                          Book A Field
                      </button>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="Fields">
      <h1 className="FieldTitle">Field Status</h1>
      <br></br>
      <Row>
    <Col>
      <Card>
        <Card.Img variant="top" src={Geegees}/>
        <Card.Body>
          <Card.Title>Geegees Field</Card.Title>
          <Card.Text>
            <div className="open">Open</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        <Col>
      <Card>
        <Card.Img variant="top" src={Mattanthony} />
        <Card.Body>
          <Card.Title>Matt Anthony Field</Card.Title>
          <Card.Text>
            <div className="closed">Closed</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        <Col>
      <Card>
        <Card.Img variant="top" src={Saintlaurent} />
        <Card.Body>
          <Card.Title>Saint Laurent Field</Card.Title>
          <Card.Text>
            <div className="open">Open</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
          </div>
          
   <div className="Contact">
   <h1 className="T">Frequently Asked Questions</h1>
   <br></br>
   <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Who Is Allowed To Enroll?</Accordion.Header>

        <Accordion.Body>
          Anyone of all ages and skill level is able to enroll!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What Programs Do We Offer?</Accordion.Header>
        <Accordion.Body>
          We offer a variety of programs for players of all skill levels! We offer both recreational and competitive programs
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Where Can I Enroll/Rent?</Accordion.Header>
        <Accordion.Body>
          You can enroll online all you need to do is visit our programs page and view the current programs we offer
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   
    </div>
          </>


  );
}

export default Home;
