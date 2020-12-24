
import React from "react"
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className="ml-5 mr-5">
      <Navbar.Brand href="/">ACHRYSAETOS</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="features">Features</Nav.Link>
        <Nav.Link href="pricing">Pricing</Nav.Link>
      </Nav>
      <Nav inline>
        <Nav.Link href="/">Sign In</Nav.Link>
        <Nav.Link href="/">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header
