import React, { Component } from "react";
import test from "./../components/stats";

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

class test extends Component {
  render() {
    console.log(this.state.cardArray);
    return (
      <div>
        <Container>
          <stats />
        </Container>
      </div>
    );
  }
}

export default test;
