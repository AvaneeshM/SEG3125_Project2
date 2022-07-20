import logo from './logo.svg';
import './Program.css';
import Accordion from 'react-bootstrap/Accordion';
import {Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import stadium from "./images/Stadium.jpg"
import RecreationalSoccer from "./images/RecreationalSoccer.jpg"
import CompetitiveSoccer from "./images/CompetitiveSoccer.jpg"
import DropInSoccer from "./images/DropInSoccer.jpg"

function Program() {
  return (
    <div className="Program">
    <h1 className="T">Programs Offered</h1>

<Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Recreational</Accordion.Header>

        <Accordion.Body>
      <Row>
        <Col>          
        
        <div>
              <img src={RecreationalSoccer} className="pImage" alt="logo" />
          </div>
          
          </Col>
        
        <Col>
            Description: For those who want to play soccer casually. Players will be put into teams and be in league with a tournament at the end of the season
            <br></br>
            <br></br>
            Price: $250
            <br></br>
            <br></br>
            Ages: All
            <br></br>
            <br></br>
            Timings: Once a Week
            <br></br>
          </Col>
      </Row>

                  <div className="pButton">
                      <Link to="/programcheckout"><button className="btnprogram">
                          Enroll
                      </button>
                      </Link>
                      </div>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header>Competitive/Developmental</Accordion.Header>
        <Accordion.Body>
        <Row>
        <Col>          
        
        <div>
              <img src={CompetitiveSoccer} className="pImage" alt="logo" />
          </div>
          
          </Col>
        
        <Col>
            Description: For those want to play soccer seriously. Before people join the team they must go through tryouts. Cleats and Jersey will be provided. 
            <br></br>
            <br></br>
            Price: $1000
            <br></br>
            <br></br>
            Ages: 12+
            <br></br>
            <br></br>
            Timings: 3 Times A Week
            <br></br>
          </Col>
      </Row>
          <div className="pButton">
                      <Link to="/programcheckout"><button className="btnprogram">
                          Enroll
                      </button>
                      </Link>
                      </div>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="2">
        <Accordion.Header>Drop In</Accordion.Header>
        <Accordion.Body>
        <Row>
        <Col>          
        
        <div>
              <img src={DropInSoccer} className="pImage" alt="logo" />
          </div>
          
          </Col>
        
        <Col>
            Description: For those who just want to play soccer. Players of all skill are allowed.
            <br></br>
            <br></br>
            Price: $5
            <br></br>
            <br></br>
            Ages: All
            <br></br>
            <br></br>
            Timings: 4 Times A Week
            <br></br>
          </Col>
      </Row>
          <div className="pButton">
                      <Link to="/programcheckout"><button className="btnprogram">
                          Enroll
                      </button>
                      </Link>
                      </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Program;