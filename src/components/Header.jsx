import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";
import "../assets/styles/Header.css"; 

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="menu" />
          <Navbar.Collapse id="menu">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
              <Nav.Link as={NavLink} to="/category/vetements">Vêtements</Nav.Link>
              <Nav.Link as={NavLink} to="/category/chaussures">Chaussures</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
