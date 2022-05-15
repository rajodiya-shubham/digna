import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CREATORS, HOME, LICENSE, PRODUCTS, WHY_DIGNA } from "./paths";

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Link to={HOME} className="navbar-brand text-warning">
          Digna
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to={PRODUCTS} className="nav-link">
              Products
            </Link>
            <Link to={CREATORS} className="nav-link">
              Creators
            </Link>
            <Link to={LICENSE} className="nav-link">
              License
            </Link>
            <Link to={WHY_DIGNA} className="nav-link">
              Why Digna
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
