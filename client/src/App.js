import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import DeckDisplay from "./pages/DeckDisplay";
import Auth from "./Auth/Auth.js";

const auth = new Auth();

function App() {
  // auth.login();
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/deck_display" component={DeckDisplay} />
      </Switch>
    </Router>
  );
}

export default App;
