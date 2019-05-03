import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Flip from "./pages/flip";
import CardSelector from "./pages/CardSelector";

// import DeckDisplay from "./pages/DeckDisplay";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cardselector" component={CardSelector} />
        <Route exact path="/flip" component={Flip} />
        {/* <Route exact path="/deck_display" component={DeckDisplay} /> */}
      </Switch>
    </Router>
  );
}

export default App;
