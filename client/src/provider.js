import React, { Component } from "react";

import MyContext from "./context";

class MyProvider extends Component {
  state = {
    deck: [],
    deckProb: []
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          saveDeck: (deck, deckProb) =>
            this.setState({ deck: deck, deckProb: deckProb })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
