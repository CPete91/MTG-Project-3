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
    cardArray: []
  };

  loadCards = () => {
    console.log("yesssss");
    API.getCards();

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

  render() {
    return (
      <div>
        <Container>
          <CardDeck>
            <CardDisplay card={this.state.cardArray[0]} />
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default CardSelector;
