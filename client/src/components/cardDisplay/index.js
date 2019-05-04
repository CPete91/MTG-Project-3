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
      <CardImg src={props.card.image_uris.normal} alt={props.card.name} />
      <CardBody>
        <CardTitle>{props.card.name}</CardTitle>
        <Button>Select Card</Button>
      </CardBody>
    </Card>
  );
}

export default CardDisplay;
