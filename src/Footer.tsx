import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CREATORS, HOME, LICENSE, PRODUCTS, WHY_DIGNA } from "./paths";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import ReactLogo from "./logo_footer.svg";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <Navbar>
      <Container className="d-flex align-items-center justify-content-between">
        <Link to={HOME} className="navbar-brand text-warning">
          <img src={ReactLogo} style={{ height: "20px" }} />
        </Link>
        <p className="text-copyright"> All rights reserved - Digma © 2022</p>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <div>
              <a href="mailto:contact@thedigna.com">
                <MDBIcon icon="envelope" />
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;
            {/* <MDBBtn className="m-1" style={{ color: "white" }} href="#">
              
            </MDBBtn> */}
            {/* <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#"
            >
             
            </MDBBtn> */}
            <div>
              <a href="https://www.instagram.com/the_digna/">
                <MDBIcon fab icon="instagram" style={{ color: "violet" }} />
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;
            {/* <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#"
            >
              
            </MDBBtn> */}
            <div>
              <a href="https://twitter.com/digna_the">
                <MDBIcon fab icon="twitter" />
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;
            {/* <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#"
            >
              
            </MDBBtn> */}
            {/* <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#c61118" }}
              href="#"
            >
              
            </MDBBtn> */}
            <div>
              <a href="https://www.pinterest.com/thedigna">
                <MDBIcon fab icon="pinterest" style={{ color: "red" }} />
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div>
              <a href="https://www.linkedin.com/company/thedigna">
                <MDBIcon fab icon="linkedin-in" />
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;
            {/* <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#ed302f" }}
              href="#"
            >
              
            </MDBBtn> */}
            <div>
              <a href="https://www.youtube.com/channel/UCeTfCNNj-nMLYm8RReVzioA">
                <MDBIcon fab icon="youtube" style={{ color: "red" }} />
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
