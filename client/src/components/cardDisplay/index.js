import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

export function CardDisplay(props) {
  return (
    <Card>
      <CardImg src={props.card.img_uris.normal} alt={props.card.name} />
      <CardBody>
        <CardTitle>{props.card.name}</CardTitle>
        <Button>Select Card</Button>
      </CardBody>
    </Card>
  );
}

export default CardDisplay;
