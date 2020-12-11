import { useHistory } from "react-router-dom";
import "./LogIn.css";
import { useState } from "react";
import Axios from "axios";

export default function LogIn() {
  
let history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function addLogIn(){
    Axios.post("http://localhost:3000/users/login", { username, password }, { withCredentials: true }).then(response=>{
      history.push("/prayerrequest");
    });
  }
return (
    <div className="LogIn">
    <div className="information">
      <label> Username: </label>{" "}
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />{" "}
      <label> Password: </label>{" "}
      <input
        type="text"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={()=>addLogIn()}>Log in</button>
      </div>
      </div>
       );
      }

    