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

export function CardDisplay(props) {
  return (
    <Card>
      <CardImg
        src={
          props.card.image_uris
            ? props.card.image_uris.normal
            : "https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png"
        }
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
