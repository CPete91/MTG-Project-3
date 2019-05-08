import React, { Component } from "react";
import CardDisplay from "../components/cardDisplay";
// import SearchLetterField from "../components/searchByLetterInput";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Stats from "./../components/stats";
import manaCalculator from "./../utils/manaCalculator";
import Navbar from "../components/Navbar";
import { Route, Redirect } from 'react-router';


// import deckProbability from "./../utils/deckProbability";
// import stats from "./../utils/stats";

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

import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

class CardSelector extends Component {
  state = {
    cardArray: [],
    deckArray: [],
    startIndex: 0,
    endIndex: 6,
    value: "",
    showFiltered: false,
    filterTopic: "",
    cardSelectorPhase: true,
    cardsFlipped: false
  };

  renderCard = () => {
    var cards = [];
    var deckToDisplay = this.state.showFiltered
      ? this.makeFilteredArray()
      : this.state.cardArray;
    if (deckToDisplay.length > 0) {
      for (let i = this.state.startIndex; i < this.state.endIndex; i++) {
        cards.push(
          <CardDisplay
            card={deckToDisplay[i]}
            addCardToDeck={this.saveToDeck}
            removeFromDeck={this.removeFromDeck}
          />
        );
      }
    }
    return cards;
  };

  makeFilteredArray = () => {
    console.log("INSIDE MAKE FILTERED ARRAY", this.state.filterTopic);
    var cards = [];
    this.state.cardArray.map(singleCard => {
      console.log(
        "right before the if",
        this.state.filterTopic,
        singleCard.type_line.indexOf(this.state.filterTopic)
      );
      if (singleCard.type_line.indexOf(this.state.filterTopic) >= 0) {
        console.log("inside the filtered if");
        cards.push(singleCard);
      }
    });
    return cards;
    // this.setState({ filteredArray: cards, showFiltered: true });
  };

  loadCards = () => {
    console.log("yesssss");
    API.getCards().then(data => {
      console.log(data, "DATA WE GT BACK!!!!!!!!");
      this.setState({ cardArray: data.data });
    });
  };

  componentDidMount() {
    console.log("uid: " + sessionStorage.getItem("uid"));
    this.loadCards();


  }

  // flipCards = () => {
  //   function compare(a, b) {
  //     if (a.name < b.name) {
  //       return 1;
  //     }
  //     if (a.name > b.name) {
  //       return -1;
  //     }
  //     return 0;
  //   }
  //   var sorted = [].concat(this.state.cardArray).sort(compare);
  //   this.setState({
  //     cardArray: sorted
  //   });
  // };

  flipCards = () => {
    if (this.state.cardsFlipped === false) {
      console.log("are we flipped?");
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
        cardArray: sorted,
        showFiltered: true,
        cardsFlipped: true
      });
    } else if (this.state.cardsFlipped === true) {
      function compare(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
      var sorted = [].concat(this.state.cardArray).sort(compare);
      this.setState({
        cardsFlipped: false,
        cardArray: sorted
      });
    }
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

  handleChange = event => {
    console.log("letter to search!!", event.target.value);
    var searchedCards = [];
    this.state.cardArray.map(data => {
      console.log("INSIDE MAP", event.target.value, data.name.charAt(0));
      if (
        data.name.charAt(0).toLowerCase() == event.target.value.toLowerCase()
      ) {
        console.log("INSIDE IFF");
        searchedCards.push(data);
      }
    });
    console.log("serached !!", searchedCards);
    // this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  saveToDeck = card => {
    card = manaCalculator(card);
    let addCard = this.state.deckArray;
    addCard.push(card);
    this.setState({ deckArray: addCard });

    console.log(this.state.deckArray);
  };

  removeFromDeck = name => {
    console.log(name);
    var myArray = this.state.deckArray.filter(function (obj) {
      return obj.name !== name;
    });
    console.log(myArray);
    this.setState({ deckArray: myArray });
  };

  saveDeck = () => {
    API.submitDeck({
      cards: this.state.deckArray,
      uid: sessionStorage.getItem("uid")
    });
  };

  filterReset = () => {
    this.setState({ showFiltered: false });
  };

  sortCards = e => {
    this.setState({ showFiltered: true, filterTopic: e.target.name });
  };

  playerDeck = () => {
    var playerDeck = [];
    this.state.deckArray.map(singleCard => {
      playerDeck.push(
        <div>
          <h3>{singleCard.name}</h3>
        </div>
      );
    });
    return playerDeck;
  };

  render() {
    console.log("are you logged in: " + this.state.loggedIn);


    if (sessionStorage.getItem("uid") == false || sessionStorage.getItem("uid") == "false") {

      return <Redirect to='/' />

    }


    console.log("we re-rendered", this.state);
    return (
      <div>
        <Navbar />

        <Container>
          <Form className="form-container">
            <FormGroup>
              <Label className="form-label" for="search">
                Search Card By Letter
              </Label>
              <Input
                name="search-letter"
                type="text"
                maxLength="1"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Form>
          <button onClick={this.flipCards}>Flip Cards Alphabetically</button>
          <button name="Creature" onClick={this.sortCards}>
            Sort for Creatures
          </button>
          <button name="Instant" onClick={this.sortCards}>
            Sort Instant
          </button>
          <p>Number of Cards in Deck: {this.state.deckArray.length}</p>
          <div>{this.playerDeck()}</div>
          <CardDeck>{this.renderCard()}</CardDeck>
          <button name="backClick" onClick={this.handleClick}>
            Back
          </button>
          <button name="forwardClick" onClick={this.handleClick}>
            Forward
          </button>
          <button onClick={this.filterReset}>Filter Reset</button>
          <button onClick={this.saveDeck}>Save Deck</button>
        </Container>
      </div>
    );
  }
}

export default CardSelector;

// https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png
