
import './Club.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Person1 from './images/Person1.jpg'
import Person2 from './images/Person2.jpg'
import Person3 from './images/Person3.jpg'

import {Link } from "react-router-dom";

function Club() {
  return (
    <div className="Club">
    <div classname="ClubTitle">
    <h1 >Meet Our Staff</h1>
    </div>
<Row>
        <Col>
          <Card>
            <Card.Img variant="top" className='clubPicture' src={Person1} />
            <Card.Body>
              <Card.Title>John Smith</Card.Title>
              <Card.Text>
              One of the founding members of Ottawa FC. 
              After playing in the MLS for 15 years John is now the current President of the club. 
              He is also the supervisor for the Geegee's Field.
              </Card.Text>
              <a href="mailto:someone@yoursite.com">Email Us</a>
            </Card.Body>
          </Card>
        </Col>
                <Col>
          <Card>
            <Card.Img variant="top" className='clubPicture' src={Person2} />
            <Card.Body>
              <Card.Title>Ryan Dave</Card.Title>
              <Card.Text>
              Ryan is one of the scouts for the competitive team.
              He previously used to be a scout for Toronto FC.
              He is also the supervisor of the Matt Anthony Field.
              </Card.Text>
              <a href="mailto:someone@yoursite.com">Email Us</a>
            </Card.Body>
          </Card>
        </Col>
        
              <Col>
          <Card>
            <Card.Img variant="top" className='clubPicture' src={Person3} />
            <Card.Body>
              <Card.Title>Tom Donald</Card.Title>
              <Card.Text>
              After managing the Seattle Sounders for 10 years Tom is now one of the managers for Ottawa FC competitive team.
              He is also the supervisor of the Saint Laurent Field.
              </Card.Text>
              <a href="mailto:someone@yoursite.com">Email Us</a>
            </Card.Body>
          </Card>
        </Col>

    </Row>
    </div>
  );
}

export default Club;