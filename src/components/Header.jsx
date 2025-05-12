import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="menu" />
          <Navbar.Collapse id="menu">
            <div className="ms-auto d-flex gap-3">
              <NavLink to="/" className="nav-link">Accueil</NavLink>
              <NavLink to="/category/vetements" className="nav-link">Vêtements</NavLink>
              <NavLink to="/category/chaussures" className="nav-link">Chaussures</NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
