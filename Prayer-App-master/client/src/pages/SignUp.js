import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SignUp() {
  let history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function addSignUp() {
    const newUser = { firstName, lastName, email, username, password };
    Axios.post(
      "http://localhost:3000/users/signup",
      { firstName, lastName, email, username, password },
      { withCredentials: true }
    ).then((response) => {
      console.log(response);
      history.push("/login");
    });
  }
  return (
    // <div className="SignUp">
    // <div className="information">
    //   <label> First Name: </label>{" "}
    //   <input
    //     type="text"
    //     onChange={(event) => {
    //       setFirstName(event.target.value);
    //     }}
    //   />{" "}
    //   <label> Last Name: </label>{" "}
    //   <input
    //     type="text"
    //     onChange={(event) => {
    //       setLastName(event.target.value);
    //     }}
    //   />
    //   <label> Email: </label>{" "}
    //   <input
    //     type="text"
    //     onChange={(event) => {
    //       setEmail(event.target.value);
    //     }}
    //   />
    //   <label> Username: </label>{" "}
    //   <input
    //     type="text"
    //     onChange={(event) => {
    //       setUsername(event.target.value);
    //     }}
    //   />
    //   <label> Password: </label>{" "}
    //   <input
    //     type="text"
    //     onChange={(event) => {
    //       setPassword(event.target.value);
    //     }}
    //   />
    //   <button onClick={()=>addSignUp()}>Sign Up</button>
    //   </div>
    //   </div>

    <div className="SignUp">
      <h3>Sign Up</h3>
      <Form >
        <Form.Group size="lg" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="button" onClick={addSignUp}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
