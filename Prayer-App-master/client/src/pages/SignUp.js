// import "./App.css";
// import { useState } from "react";
// import Axios from "axios";

// function App() {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [username, setPassword] = useState("");
//     const [password, setPassword] = useState("");

//     function addSignUp() {
//         Axios.post("http://localhost:3000/users/signup", { firstName, lastName, email, username, password }, { withCredentials: true });
//         console.log("success");
//     }

// return (
//         <div className="SignUp">
//         <div className="information">
//           <label> First Name: </label>{" "}
//           <input
//             type="text"
//             onChange={(Event) => {
//               setFirstName(Event.target.value);
//             }}
//           />