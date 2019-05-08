import React, { Component } from "react";
import CardDisplay from "../components/cardDisplay";
// import SearchLetterField from "../components/searchByLetterInput";
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

import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

class CardSelector extends Component {
  state = {
    cardArray: [],
    deckArray: [],
    startIndex: 0,
    endIndex: 6,
    value: ""
  };

  renderCard = () => {
    var cards = [];
    if (this.state.cardArray.length > 0) {
      for (let i = this.state.startIndex; i < this.state.endIndex; i++) {
        cards.push(<CardDisplay card={this.state.cardArray[i]} />);
      }
    }
    return cards;
  };

  loadCards = () => {
    console.log("yesssss");
    API.getCards().then(data => {
      console.log(data);
      this.setState({ cardArray: data.data });
    });

    API.getCards()
      .then(res =>
        this.setState({
          cardArray: res.data
        })
      )
      .catch(err => console.log(err));
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

  handleChange = event => {
    console.log("letter to serach!!", event.target.value);
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

  letterSearch = () => {
    console.log("letter serach!!");

    // if (this.state.value === this.state.cardArray.name.charAt(0)) {
    //   var cards = [];

    //   for (let i = this.state.startIndex; i < this.state.endIndex; i++) {
    //     cards.push(<CardDisplay card={this.state.cardArray[i]} />);
    //   }
    //   console.log("I searched by the first letter dude!");

    //   return cards;
    // }
  };

  render() {
    console.log(this.state.cardArray);
    return (
      <div>
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
          <button onClick={this.handleSort}>sort</button>
          <button name="backClick" onClick={this.handleClick}>
            Back
          </button>
          <CardDeck>{this.renderCard()}</CardDeck>
          <button name="forwardClick" onClick={this.handleClick}>
            Forward
          </button>
        </Container>
      </div>
    );
  }
}

export default CardSelector;
