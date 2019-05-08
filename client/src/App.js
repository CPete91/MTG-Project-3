import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Flip from "./pages/flip";
import CardSelector from "./pages/CardSelector";
import Test from "./pages/test";

import DeckDisplay from "./pages/DeckDisplay";



function App() {
  console.log("session thing " + sessionStorage.length);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route exact path="/cardselector" component={CardSelector} />
        <Route exact path="/flip" component={Flip} />
        <Route exact path="/deckdisplay" component={DeckDisplay} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
