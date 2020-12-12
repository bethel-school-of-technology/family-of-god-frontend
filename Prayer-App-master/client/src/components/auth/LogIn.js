import { useHistory, withRouter } from "react-router-dom";
import "./LogIn.css";
import { useState } from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LogIn({history}) {
  // let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function addLogIn() {
    Axios.post(
      "http://localhost:3000/users/login",
      { username, password },
      { withCredentials: true }
    ).then((response) => {
      // console.log(response.data);
      localStorage.setItem("prayertoken", response.data.jwt);
      history.push("/prayerrequest");
    });
  }
  return (
    <div className="Login">
      <h3>Log In</h3>
      <Form >
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
        <Button block size="lg" type="button" onClick={addLogIn}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(LogIn)