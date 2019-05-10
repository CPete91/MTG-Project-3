import React from "react";
import {
  Card,
  Button,
  CardTitle,
  Row,
  Col,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle
} from "reactstrap";
import { checkPropTypes } from "prop-types";

export function Deck(props) {
  console.log(props);

  return (
    <Col xs="3">
      <Card className="deck-card">
        <CardImg
          className="card-img deck-img"
          src={
            props.deck.cards[0].image_uris
              ? props.deck.cards[0].image_uris.normal
              : "https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png"
          }
          alt={props.deck.cards[0].name}
        />
        <CardBody className="card-body-styles">
          <CardTitle>{props.deck.name}</CardTitle>
          <button
            class="card-btn"
            onClick={e => props.handleEdit(e, props.deck)}
          >
            Edit Deck
          </button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Deck;
