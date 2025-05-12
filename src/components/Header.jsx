import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
        <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/category/vetements">Vêtements</Nav.Link>
            <Nav.Link as={Link} to="/category/chaussures">Chaussures</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
