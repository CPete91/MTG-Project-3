import React, { Component } from "react";
import Stats from "./../components/stats";

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

class Test extends Component {
  render() {
    return (
      <div>
        <Container>
          <Stats dataArray={[12, 13, 14, 15, 16, 16, 17, 18, 19, 20]} />
        </Container>
      </div>
    );
  }
}

export default Test;
