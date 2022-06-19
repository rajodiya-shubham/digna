import React, { useState } from "react";
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditProfile from "./core/EditProfile";
import Profile from "./core/Profile";
import { CREATORS, HOME, LICENSE, PRODUCTS, WHY_DIGNA } from "./paths";

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const openModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Link to={"/"} className="navbar-brand text-warning">
            Digna
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {
                /* <Link to={"/"} className="nav-link">
              Product
            </Link>
            <Link to={"/"} className="nav-link">
              Creators
            </Link>
            <Link to={"/"} className="nav-link">
              License
            </Link>
            <Link to={"/"} className="nav-link">
              Why Digna
            </Link> */
                <Button onClick={openModal}>Edit Profile</Button>
              }
            </Nav>
            <Nav>
              <Button onClick={openModal}>Profile</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showModal} size="lg" onHide={hideModal}>
        <Modal.Body className="modalBody">
          <EditProfile />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navigation;
