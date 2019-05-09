import React from "react";
import "./App.css";
import "./animate.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Flip from "./pages/flip";
import CardSelector from "./pages/CardSelector";
import Test from "./pages/test";
import MyProvider from "./provider";
import DeckDisplay from "./pages/DeckDisplay";
import Stats from "./pages/stats";

function App() {
  console.log("session thing " + sessionStorage.length);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route exact path="/cardselector" component={CardSelector} />
        <Route exact path="/flip" component={Flip} />
        <Route exact path="/deckdisplay" component={DeckDisplay} />
        <Route exact path="/stats" component={Stats} />
      </Switch>
    </Router>
  );
}

export default App;
