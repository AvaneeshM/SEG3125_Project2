import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from './images/soccerball.svg';



const Navigation = () => {
    return(
        <Navbar bg="primary" expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand className="test" href="/" >
          <img
              alt=""
              src={icon}
              width="45"
              height="45"
              className="d-inline-block align-top"
            />{' '}
            Ottawa FC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/club">Club</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/program">Programs</NavDropdown.Item>
                <NavDropdown.Item href="/rentals">
                  Rentals
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
}
export default Navigation;