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
  render() {
    console.log("we re-rendered", this.state);
    return (
      <div>
        <Stats dataArray={localStorage.getItem("deck")} />
        <Stats dataArray={localStorage.getItem("deckProb")} />
      </div>
    );
  }
}

export default CardSelector;

// https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png
