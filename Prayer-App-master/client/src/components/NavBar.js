import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";


export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">Family of God</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/home">home</Nav.Link>
            <Nav.Link href="/allprayerrequests">prayer requests</Nav.Link>
          </Nav>
          <Nav inline>
          <Nav.Link href="/prayerrequest">my prayer requests</Nav.Link>
          <Nav.Link href="/login">log in</Nav.Link>
          <Nav.Link href="/signup">sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
