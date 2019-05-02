import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

export function CardDisplay(props) {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle />
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </CardText>
        <Button>Select Card</Button>
      </CardBody>
    </Card>
  );
}

export default CardDisplay;
