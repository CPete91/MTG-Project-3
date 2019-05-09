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
    <Card className="card-styles">
      <CardImg
        src={props.card.image_uris ? props.card.image_uris.normal : holdImg}
        alt={props.card.name}
      />
      <CardBody>
        <CardTitle>{props.card.name}</CardTitle>
        <Button
          onClick={() => {
            props.addCardToDeck(props.card);
          }}
        >
          Add to Deck
        </Button>
        <Button
          onClick={() => {
            props.removeFromDeck(props.card.name);
          }}
        >
          Remove From Deck
        </Button>
      </CardBody>
    </Card>
  );
}

export default CardDisplay;
