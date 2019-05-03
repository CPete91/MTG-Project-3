import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";

import Flip from "./pages/flip";

import DeckDisplay from "./pages/DeckDisplay";
import Auth from "./Auth/Auth.js";

const auth = new Auth();
// auth.login();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/flip" component={Flip} />
        <Route exact path="/deck_display" component={DeckDisplay} />
      </Switch>
    </Router>
  );
}

export default App;
