
import React from "react"
import { Nav, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar className="ml-5 mr-5 fixed-bottom">
      <Nav className="mr-auto">
        <Nav.Link href="/">Copyright © 2020 ACHRYSAETOS, Inc.</Nav.Link>
        <Nav.Link href="/">Terms of Service</Nav.Link>
        <Nav.Link href="/">Privacy Policy</Nav.Link>
        <Nav.Link href="/">FAQ</Nav.Link>
        <Nav.Link href="/">Careers</Nav.Link>
        <Nav.Link href="/">Support Us</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Footer
