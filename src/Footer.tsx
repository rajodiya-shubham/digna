import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CREATORS, HOME, LICENSE, PRODUCTS, WHY_DIGNA } from "./paths";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Link to={HOME} className="navbar-brand text-warning">
          Digna
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div>
              <a href="https://www.facebook.com/thedigna">
                <MDBIcon fab icon="facebook-f" />
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
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
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
              <a href="#">
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
