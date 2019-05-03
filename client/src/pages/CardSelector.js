import React, { Component } from "react";
// import CardDisplay from "../components/cardDisplay";
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

  componentDidMount() {
    this.getCards();
  }

  loadCards = () => {
    API.getCards()
      .then(res =>
        this.setState({
          cardArray: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.data.map((val, idx) => (
          <div className="col-md-3">
            <Container>
              <CardDeck>
                <CardDisplay card={this.state.cardArray[0]} />
              </CardDeck>
            </Container>
          </div>
        ))}
      </div>
    );
  }
}

export default CardSelector;
