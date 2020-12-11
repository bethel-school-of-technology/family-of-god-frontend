import "./App.css";
import { useState } from "react";
import Axios from "axios";
import {Route, Switch, Redirect, BrowserRouter as Router} from "react-router-dom";
import PrayerRequest from "./pages/PrayerRequest";
import Homepage from "./pages/Homepage";
import LogIn from "./components/auth/LogIn";



function App() {
return(
  <div>
    <Router>
    <Switch>
      <Route exact path="/home" component={Homepage} />
      <Route exact path="/prayerrequest" component={PrayerRequest} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/">
        <Redirect to="/home"/>
      </Route>
    </Switch>
    </Router>
  </div>
)
}

export default App;
