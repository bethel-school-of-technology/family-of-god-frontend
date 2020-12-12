import "./App.css";
import { useState } from "react";
import Axios from "axios";
import {Route, Switch, Redirect, BrowserRouter as Router} from "react-router-dom";
import PrayerRequest from "./pages/PrayerRequest";
import Homepage from "./pages/Homepage";
import LogIn from "./components/auth/LogIn";
import SignUp from "./pages/SignUp";
import PrayerDetails from "./pages/PrayerDetails";
import NavBar from "./components/NavBar";
import AllPrayerRequests from "./pages/AllPrayerRequests";



function App() {
return(
  <div>
    <NavBar/>
    <Router>
    <Switch>
      <Route exact path="/home" component={Homepage} />
      <Route exact path="/prayerrequest" component={PrayerRequest} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/allprayerrequests" component={AllPrayerRequests} />
      <Route exact path="/prayerrequest/details/:id" component={PrayerDetails} />
      <Route exact path="/">
        <Redirect to="/home"/>
      </Route>
    </Switch>
    </Router>
  </div>
)
}

export default App;
