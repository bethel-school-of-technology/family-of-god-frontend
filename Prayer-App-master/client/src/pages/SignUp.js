import { useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

export default function SignUp() {
  
let history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function addSignUp(){
    Axios.post("http://localhost:3000/signup", { firstName, lastName, email, username, password }, { withCredentials: true }).then(response=>{
      history.push("/login");
    });
  }
return (
    <div className="SignUp">
    <div className="information">
      <label> First Name: </label>{" "}
      <input
        type="text"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />{" "}
      <label> Last Name: </label>{" "}
      <input
        type="text"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <label> Eamil: </label>{" "}
      <input
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label> Username: </label>{" "}
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label> Password: </label>{" "}
      <input
        type="text"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={()=>addSignUp()}>Sign Up</button>
      </div>
      </div>
       );
      }