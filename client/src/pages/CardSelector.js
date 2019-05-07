import React, { Component } from "react";
import CardDisplay from "../components/cardDisplay";
import { Link } from "react-router-dom";
import API from "../utils/API";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container
} from "reactstrap";

class CardSelector extends Component {
  state = {
    cardArray: [],
    deckArray: [],
    startIndex: 0,
    endIndex: 6
  };

  renderCard = () => {
    var cards = [];
    if (this.state.cardArray.length > 0) {
      for (let i = this.state.startIndex; i < this.state.endIndex; i++) {
        cards.push(
          <CardDisplay
            card={this.state.cardArray[i]}
            onClickCommand={this.saveToDeck}
          />
        );
      }
    }
    return cards;
  };

  loadCards = () => {
    console.log("yesssss");
    API.getCards().then(data => {
      console.log(data, "DATA WE GT BACK!!!!!!!!");
      this.setState({ cardArray: data.data });
    });

    // API.getCards()
    //   .then(res =>
    //     this.setState({
    //       cardArray: res.data
    //     })
    //   )
    //   .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadCards();
  }

  handleSort = () => {
    function compare(a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    }
    var sorted = [].concat(this.state.cardArray).sort(compare);
    this.setState({
      cardArray: sorted
    });
  };

  handleClick = event => {
    console.log("we got clicked!");
    if (event.target.name === "forwardClick") {
      this.setState({
        startIndex: this.state.startIndex + 6,
        endIndex: this.state.endIndex + 6
      });
    } else if (event.target.name === "backClick" && this.state.startIndex > 0) {
      this.setState({
        startIndex: this.state.startIndex - 6,
        endIndex: this.state.endIndex - 6
      });
    }
  };

  saveToDeck = card => {
    let addCard = this.state.deckArray;
    addCard.push(card);
    this.setState({ deckArray: addCard });

    console.log(this.state.deckArray);
  };

  saveDeck = () => {
    API.submitDeck({
      Deck: this.state.deckArray,
      userId: 1
    });
  };

  render() {
    console.log(this.state.cardArray);
    return (
      <div>
        <Container>
          <button onClick={this.handleSort}>sort</button>

          <CardDeck>{this.renderCard()}</CardDeck>
          <button name="backClick" onClick={this.handleClick}>
            Back
          </button>
          <button name="forwardClick" onClick={this.handleClick}>
            Forward
          </button>
          <button onClick={this.saveDeck}>Save Deck</button>
        </Container>
      </div>
    );
  }
}

export default CardSelector;
