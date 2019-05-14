import React, { Component } from "react";
import Deck from "../components/deck";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Route, Redirect } from "react-router";
import Navbar from "../components/Navbar";

//
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Row
} from "reactstrap";
//
// const DeckDisplay = props => {
//   return <CardDeck />;
// };
//

class DeckDisplay extends Component {
  state = {
    decks: [],
    toCardSelector: false,
    startIndex: 0,
    endIndex: 0
  };

  loadDecks() {
    API.getUserDecks(sessionStorage.getItem("uid")).then(data => {
      // console.log(data.data);
      this.setState({ decks: data.data });
      this.setState({ endIndex: data.data.length });
    });
  }

  renderDecks() {
    var decks = [];
    console.log(this.state.decks);
    if (this.state.decks.length > 0) {
      for (let i = this.state.startIndex; i < this.state.endIndex; i++) {
        decks.push(
          <Deck
            handleEdit={this.handleEdit.bind(this)}
            deck={this.state.decks[i]}
          />
        );
        console.log(this.state.decks);
      }
    }

    return decks;
  }

  // handleClick = event => {
  // console.log("we got clicked!");
  // if (event.target.name === "forwardClick") {
  // this.setState({
  // startIndex: this.state.startIndex + 6,
  // endIndex: this.state.endIndex + 6
  // });
  // } else if (event.target.name === "backClick" && this.state.startIndex > 0) {
  // this.setState({
  // startIndex: this.state.startIndex - 6,
  // endIndex: this.state.endIndex - 6
  // });
  // }
  // };

  componentDidMount() {
    this.loadDecks();
  }

  handleNewDeck(e) {
    e.preventDefault();
    sessionStorage.setItem("deck", false);
    this.setState({ toCardSelector: true });
  }

  handleEdit(e, selDeck) {
    e.preventDefault();
    sessionStorage.setItem("deck", selDeck._id);
    this.setState({ toCardSelector: true });
  }

  render() {
    if (
      sessionStorage.getItem("uid") == false ||
      sessionStorage.getItem("uid") == "false"
    ) {
      return <Redirect to="/" />;
    }

    if (this.state.toCardSelector === true) {
      return <Redirect to="/cardselector" />;
    } else {
      return (
        <div className="text-center">
          <Navbar />
          <h1 className="mgt-h1 fadeIn">Choose Your Deck</h1>

          <Container>
            <Row>{this.renderDecks()}</Row>
          </Container>

          <button
            id="new-deck-btn"
            className="bottom-btn"
            onClick={e => {
              this.handleNewDeck(e);
            }}
          >
            {" "}
            New Deck
          </button>
        </div>
      );
    }
  }
}

export default DeckDisplay;
