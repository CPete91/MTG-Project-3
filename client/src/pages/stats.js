import React, { Component } from "react";
import CardDisplay from "../components/cardDisplay";
import Stats from "./../components/stats";
import deckProbability from "./../utils/deckProbability";
import stats from "./../utils/stats";
import MyProvider from "./../provider";
import MyContext from "./../context";

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
    endIndex: 6,
    showFiltered: false,
    filterTopic: "",
    cardSelectorPhase: true,
    cardsFlipped: false
  };

  render() {
    console.log("we re-rendered", this.state);
    return (
      <div>
        <Stats dataArray={localStorage.getItem("statsDeck")} />
        <Stats dataArray={localStorage.getItem("deckProb")} />
      </div>
    );
  }
}

export default CardSelector;

// https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png
