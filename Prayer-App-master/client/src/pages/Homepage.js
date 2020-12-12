import "./Homepage.css";
import { useState } from "react";
import { components } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Homepage() {
  return (
    <Jumbotron fluid>
  <Container>
    <h1>Welcome to Family of God prayer app!</h1>
    <p>
      This prayer app allows you to add a prayer request. People can pray for you and comment.
      Please sign up. Or login if you are already a user. 
    </p>
  </Container>
</Jumbotron>
    
  );
}
export default Homepage;
