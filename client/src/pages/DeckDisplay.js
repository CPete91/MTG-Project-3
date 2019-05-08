import React, { Component } from "react";
import Deck from "../components/deck";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Route, Redirect } from 'react-router'


// 
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
// 
// const DeckDisplay = props => {
//   return <CardDeck />;
// };
// 




class DeckDisplay extends Component {

    state = {
        decks: [],
        toCardSelector: false,
        startIndex: 0,
        endIndex: 0




    }


    loadDecks() {
        API.getUserDecks(sessionStorage.getItem("uid")).then(data => {
            // console.log(data.data);
            this.setState({ decks: data.data });
            this.setState({ endIndex: data.data.length })
        });



    }

    renderDecks() {
        var decks = [];
        console.log(this.state.decks);
        if (this.state.decks.length > 0) {
            for (let i = this.state.startIndex; i < this.state.endIndex; i++) {
                decks.push(
                    <Deck deck={this.state.decks[i]}></Deck>

                )
                console.log(this.state.decks);


            }
        }

        return decks;

    }

    componentDidMount() {

        this.loadDecks();
    }

    handleNewDeck(e) {
        e.preventDefault();
        this.setState({ toCardSelector: true });

    }

    render() {
        if (this.state.toCardSelector === true) {
            return <Redirect to='/cardselector' />

        }

        return (
            <div>
                <Container>
                    <button onClick={e => { this.handleNewDeck(e) }}> New Deck</button>

                    <CardDeck>{this.renderDecks()}</CardDeck>



                </Container>



            </div>

        );
    }

}

export default DeckDisplay;
