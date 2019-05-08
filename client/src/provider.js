import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    deck: []
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          saveDeck: deck => this.setState({ deck: deck })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
