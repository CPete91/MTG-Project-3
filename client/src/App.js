import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Flip from "./pages/flip";
import CardSelector from "./pages/CardSelector";

import DeckDisplay from "./pages/DeckDisplay";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route exact path="/cardselector" component={CardSelector} />
        <Route exact path="/flip" component={Flip} />
        <Route exact path="/deck_display" component={DeckDisplay} />
      </Switch>
    </Router>
  );
}

export default App;
