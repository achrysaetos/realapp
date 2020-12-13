
import React from "react"
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className="ml-5 mr-5">
      <Navbar.Brand href="#home">ACHRYSAETOS</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Nav inline>
        <Nav.Link href="#home">Sign In</Nav.Link>
        <Nav.Link href="#features">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header
