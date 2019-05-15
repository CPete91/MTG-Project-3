import React, { Component } from "react";
import CardDisplay from "../components/cardDisplay";
// import SearchLetterField from "../components/searchByLetterInput";
import { Link } from "react-router-dom";
import API from "../utils/API";
import manaCalculator from "./../utils/manaCalculator";
import Navbar from "../components/Navbar";
import { Route, Redirect } from "react-router";

// import deckProbability from "./../utils/deckProbability";
// import stats from "./../utils/stats";
import deckProbability from "./../utils/deckProbability";
import stats from "./../utils/newStatsStuff/cardProb";
import MyProvider from "./../provider";
import MyContext from "./../context";
import "../assets/styles/CardSelector.css";

import {
  Card,
  Col,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row
} from "reactstrap";

class CardSelector extends Component {
  state = {
    cardArray: [],
    deckArray: [],
    startIndex: 0,
    endIndex: 4,
    value: "",
    showFiltered: false,
    showSearch: false,
    filterTopic: "",
    cardSelectorPhase: true,
    cardsFlipped: false,
    searchedCards: [],
    toDeckDisplay: false,
    toStatsPage: false,
    name: "",
    description: ""
  };

  renderCard = () => {
    var cards = [];
    var deckToDisplay = this.state.showFiltered
      ? this.makeFilteredArray()
      : this.state.showSearch
      ? this.state.searchedCards
      : this.state.cardArray;

    if (deckToDisplay.length > 0) {
      for (
        let i = this.state.startIndex;
        i < this.state.endIndex && i < deckToDisplay.length;
        i++
      ) {
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
      // console.log(
      //   "right before the if",
      //   this.state.filterTopic,
      //   singleCard.type_line.indexOf(this.state.filterTopic)
      // );
      if (singleCard.type_line.indexOf(this.state.filterTopic) >= 0) {
        console.log("inside the filtered if");
        cards.push(singleCard);
      }
    });
    return cards;
    // this.setState({ filteredArray: cards, showFiltered: true });
  };

  loadCards = () => {
    // console.log("yesssss");
    API.getCards().then(data => {
      // console.log(data, "DATA WE GT BACK!!!!!!!!");
      this.setState({ cardArray: data.data });
    });
  };

  componentDidMount() {
    if (
      sessionStorage.getItem("deck") == false ||
      sessionStorage.getItem("deck") == "false"
    ) {
      this.setState({ deckArray: [] });
      this.loadCards();
    } else {
      API.getDeck(sessionStorage.getItem("deck")).then(data => {
        console.log("received selected deck " + data.data[0].cards);
        //console.log("edited deck" + sessionStorage.getItem("deck"));
        //console.log("uid: " + sessionStorage.getItem("uid"));
        this.setState({ deckArray: data.data[0].cards });
        this.setState({ name: data.data[0].name });
        this.setState({ description: data.data[0].description });

        this.loadCards();
      });
    }
  }

  flipCards = () => {
    if (this.state.cardsFlipped === false) {
      // console.log("are we flipped?");
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
    // console.log("we got clicked!");
    if (event.target.name === "forwardClick") {
      this.setState({
        startIndex: this.state.startIndex + 4,
        endIndex: this.state.endIndex + 4
      });
    } else if (event.target.name === "backClick" && this.state.startIndex > 0) {
      this.setState({
        startIndex: this.state.startIndex - 4,
        endIndex: this.state.endIndex - 4
      });
    }
  };
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleChange = event => {
    // console.log("letter to search!!", event.target.value);
    var searchedCards = [];
    this.state.cardArray.map(data => {
      // console.log("INSIDE MAP", event.target.value, data.name.charAt(0));
      if (
        data.name.charAt(0).toLowerCase() == event.target.value.toLowerCase()
      ) {
        // console.log("INSIDE IFF");
        searchedCards.push(data);
      }
    });
    console.log("serached !!", searchedCards);
    this.setState({
      searchedCards: searchedCards,
      showSearch: true,
      showFiltered: false
    });
  };

  sortCards = event => {
    console.log("NAMMMMMMMMEEEEEEEE", event.target.name, event.target.value);

    this.setState({ showFiltered: true, filterTopic: event.target.value });
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

    // console.log(this.state.deckArray);
  };

  removeFromDeck = name => {
    // console.log(name);
    var myArray = this.state.deckArray.filter(function(obj) {
      return obj.name !== name;
    });
    console.log(myArray);
    this.setState({ deckArray: myArray });
  };

  saveDeck = () => {
    if (
      sessionStorage.getItem("deck") == false ||
      sessionStorage.getItem("deck") == "false"
    ) {
      API.submitDeck({
        cards: this.state.deckArray,
        uid: sessionStorage.getItem("uid"),
        name: this.state.name,
        description: this.state.description
      }).then(data => {
        this.setState({ toDeckDisplay: true });
      });
    } else {
      if (this.state.deckArray.length > 0) {
        API.editDeck({
          _id: sessionStorage.getItem("deck"),
          cards: this.state.deckArray,
          name: this.state.name,
          description: this.state.description
        }).then(data => {
          this.setState({ toDeckDisplay: true });
        });
      } else {
        API.deleteDeck({ _id: sessionStorage.getItem("deck") }).then(data => {
          this.setState({ toDeckDisplay: true });
        });
      }
    }
  };

  seeStats = () => {
    let statsDeck = stats(this.state.deckArray);
    let deckProb = deckProbability(statsDeck);
    localStorage.setItem("deckProb", deckProb);
    this.saveDeck();
    this.setState({ toStatsPage: true });
  };

  filterReset = () => {
    this.setState({ showFiltered: false, showSearch: false });
  };

  playerDeck = () => {
    var playerDeck = [];
    this.state.deckArray.map(singleCard => {
      playerDeck.push(
        <div className="cardNames">
          <p>{singleCard.name}</p>
        </div>
      );
    });
    return playerDeck;
  };

  tomTestFunc = stuffPassed => {
    console.log("STUF PASSED tom test func!!", stuffPassed);
  };

  render() {
    console.log("are you logged in: " + this.state.loggedIn);

    if (
      sessionStorage.getItem("uid") == false ||
      sessionStorage.getItem("uid") == "false"
    ) {
      return <Redirect to="/" />;
    }

    if (this.state.toDeckDisplay) {
      return <Redirect to="/deckdisplay" />;
    }

    if (this.state.toStatsPage) {
      return <Redirect to="/stats" />;
    }

    console.log("we re-rendered", this.state);
    return (
      <div>
        <Navbar />

        <div className="deckInfo">
          <p>Cards in Deck: {this.state.deckArray.length}</p>
          <p>{this.playerDeck()}</p>
        </div>
        <Container>
          <div className="filterNav d-flex justify-content-center">
            <p className="sortBox navSpacer">Search Filters:</p>
            <select className="navSpacer" onChange={this.handleChange}>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
              <option>F</option>
              <option>G</option>
              <option>H</option>
              <option>I</option>
              <option>J</option>
              <option>K</option>
              <option>L</option>
              <option>M</option>
              <option>N</option>
              <option>O</option>
              <option>P</option>
              <option>Q</option>
              <option>R</option>
              <option>S</option>
              <option>T</option>
              <option>U</option>
              <option>V</option>
              <option>W</option>
              <option>X</option>
              <option>Y</option>
              <option>Z</option>
            </select>
            <select className="navSpacer" onChange={this.sortCards}>
              <option name="Artifact">Artifact</option>
              <option name="Creature">Creature</option>
              <option>Enchantment</option>
              <option>Instant</option>
              <option>Land</option>
              <option>Planeswalker</option>
              <option>Sorcery</option>
            </select>
            <button
              className="sortBox sortBoxHover navSpacer"
              onClick={this.flipCards}
            >
              Flip Order
            </button>
            <button
              className="sortBox sortBoxHover navSpacer"
              onClick={this.filterReset}
            >
              Reset
            </button>
          </div>
          {/* <button name="Artifact" onClick={this.sortCards}>
            Artifacts
          </button>
          <button name="Creature" onClick={this.sortCards}>
            Creatures
          </button>
          <button name="Enchantment" onClick={this.sortCards}>
            Enchantments
          </button>
          <button name="Instant" onClick={this.sortCards}>
            Instant
          </button>
          <button name="Land" onClick={this.sortCards}>
            Lands
          </button>
          <button name="Planeswalker" onClick={this.sortCards}>
            Planeswalkers
          </button>
          <button name="Sorcery" onClick={this.sortCards}>
            Sorcery
          </button> */}
          <div className="deck-content-wrapper">
            <div className="deck-container">
              <CardDeck>{this.renderCard()}</CardDeck>
            </div>
            <div className="arrow-container">
              <button
                className="fas fa-caret-left arrow-icon arrow-btn "
                name="backClick"
                onClick={this.handleClick}
              />

              <button
                className="fas fa-caret-right arrow-icon arrow-btn "
                name="forwardClick"
                onClick={this.handleClick}
              />
            </div>
            <div className="save-container">
              <button className="bottom-btn" onClick={this.saveDeck}>
                Save Deck
              </button>
              <button className="bottom-btn" onClick={this.seeStats}>
                See Stats
              </button>
            </div>
            <div className="deckNaming">
              <FormGroup row>
                <Label for="deckName" sm={2}>
                  Deck Name
                </Label>
                <Col sm={10}>
                  <Input
                    name="deckName"
                    id="deckname"
                    placeholder={this.state.name}
                    onChange={e => {
                      this.handleNameChange(e);
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>
                  Deck Description
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="deckDescription"
                    id="deckDescription"
                    placeholder={this.state.description}
                    onChange={e => {
                      this.handleDescriptionChange(e);
                    }}
                  />
                </Col>
              </FormGroup>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default CardSelector;

// https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png
