import React, { Component } from "react";
import CardDisplay from "../components/cardDisplay";
import Stats from "./../components/stats";
import stats from "./../utils/stats";
import Navbar from "../components/Navbar";

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
        <Navbar/>
        <Stats data={localStorage.getItem("deckProb")} />
      </div>
    );
  }
}

export default CardSelector;

// https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png
