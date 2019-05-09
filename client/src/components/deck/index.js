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

        <Card>
            <CardImg src={props.deck.cards[0].image_uris
                ? props.deck.cards[0].image_uris.normal
                : "https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png"
            }
                alt={props.deck.cards[0].name} />
            <CardBody>

                <p>{props.deck.name}</p>
                <Button onClick={e => props.handleEdit(e, props.deck)}>Edit Deck</Button>

            </CardBody>
        </Card>


    );



}

export default Deck;