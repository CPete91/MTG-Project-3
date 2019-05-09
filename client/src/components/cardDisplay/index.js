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
import { style } from "react-toastify";

export function CardDisplay(props) {
  const holdImg = "https://static.thenounproject.com/png/54756-200.png";
  return (
    <Card>
      <CardImg
        className="card-img"
        src={props.card.image_uris ? props.card.image_uris.normal : holdImg}
        alt={props.card.name}
      />
      <CardBody className="card-body-styles">
        <CardTitle>{props.card.name}</CardTitle>
        <button
          className="card-btn"
          onClick={() => {
            props.addCardToDeck(props.card);
          }}
        >
          Add to Deck
        </button>
        <button
          className="card-btn"
          onClick={() => {
            props.removeFromDeck(props.card.name);
          }}
        >
          Remove From Deck
        </button>
      </CardBody>
    </Card>
  );
}

export default CardDisplay;
