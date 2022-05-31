import React, {Dispatch, SetStateAction} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './navBar.css'
import AccessibilityOptions from "./AccessibilityOptions/AccessibilityOptions";

interface NavBarParams {
  setAccessibilityMode: Dispatch<SetStateAction<string>>;
}

export default function NavBar(props: NavBarParams) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand className="customBrand" href="/">Flinders Neurodivergent Study Support and Advocacy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/team">Our Team</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <AccessibilityOptions setAccessibilityMode={props.setAccessibilityMode}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
