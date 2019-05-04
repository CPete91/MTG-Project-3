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

  renderCard = () => {

    if (this.state.cardArray.length > 0) {

      return <CardDisplay card={this.state.cardArray[0]} />

    }

  }

  loadCards = () => {
    console.log("yesssss");
    API.getCards().then(data => {
      this.setState({ cardArray: data.data })
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

  render() {
    return (
      <div>
        <Container>
          <CardDeck>
            {this.renderCard()}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default CardSelector;
