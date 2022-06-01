import React, {Dispatch, SetStateAction} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './navBar.css'
import AccessibilityOptions from "./AccessibilityOptions/AccessibilityOptions";
import {Link} from "react-router-dom";

interface NavBarParams {
  setAccessibilityMode: Dispatch<SetStateAction<string>>;
}

export default function NavBar(props: NavBarParams) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} className="customBrand" to="/">Flinders Neurodivergent Study Support and Advocacy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/goals">Goals</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/team">Our Team</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
          <AccessibilityOptions setAccessibilityMode={props.setAccessibilityMode}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
