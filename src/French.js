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

function French() {
  return (
    <>
    <div className="Banner">
    <a href="/"> English </a>
    </div>
    <div className="Home">
          <div>
              <img src={stadium} className="stadium" alt="logo" />
          </div>
          <div className="text">
          <br></br>
          <br></br>
              <h1> Bienvenue au FC d'Ottawa </h1>
              <p>
                Fondé en 1990, le FC Ottawa s'efforce de créer des joueurs de classe mondiale grâce à ses solides programmes offerts à ceux de tous niveaux. 
                Nous fournissons des réservations de terrains privés pour ceux qui souhaitent organiser leurs propres jeux.
              </p>
              <div className="buttons">
                  <div className="hButton">
                      <Link to="/program"><button className="btn">
                        Voir les programmes
                      </button>
                      </Link>

                      <Link to="/rentals"><button className="btn">
                        Réserver un terrain
                      </button>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="Fields">
      <h1 className="FieldTitle">État du champ</h1>
      <br></br>
      <Row>
    <Col>
      <Card>
        <Card.Img variant="top" src={Geegees}/>
        <Card.Body>
          <Card.Title>Geegees Field</Card.Title>
          <Card.Text>
            <div className="open">Ouverte</div>
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
            <div className="closed">Fermée</div>
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
            <div className="open">Ouverte</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
          </div>
          
          <div className="Contact">
   <h1 className="T">Questions Fréquemment Posées</h1>
   <br></br>
   <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Qui est autorisé à s'inscrire ?</Accordion.Header>

        <Accordion.Body>
          Toute personne de tout âge et de tout niveau peut s'inscrire !
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Quels programmes proposons-nous ?</Accordion.Header>
        <Accordion.Body>
          Nous offrons une variété de programmes pour les joueurs de tous niveaux! Nous offrons des programmes récréatifs et compétitifs
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Où puis-je m'inscrire/louer ?</Accordion.Header>
        <Accordion.Body>
        Vous pouvez vous inscrire en ligne, il vous suffit de visiter notre page de programmes et de consulter les programmes actuels que nous proposons.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   
    </div>
          </>


  );
}

export default French;
