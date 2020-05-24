/* 
 * CardSpread component for the cards game
 * CardSpread is simply cards that are spread and visible
 * CardSpreads in consideration:
 * 1. My game CardSpread
 * 2. My revealed (trick) CardSpread
 * 3. Other players' CardSpread
**/

import React from 'react';
import './PlayArena.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardSpread from "../CardSpread/CardSpread";

class PlayArena extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={6}>
                        <h6>
                            Trick Area
                        </h6>
                        <Row><CardSpread cards={[{number: 7, suit: 'spades'}]}></CardSpread></Row>
                        <Row>
                            <Col><CardSpread cards={[{number: 7, suit: 'spades'}]}></CardSpread></Col>
                            <Col><CardSpread cards={[{number: 7, suit: 'spades'}]}></CardSpread></Col>
                        </Row>
                        <Row><CardSpread cards={[{number: 7, suit: 'spades'}]}></CardSpread></Row>
                    </Col>
                    <Col>
                        <h6>
                            Card Piles Section
                        </h6>
                    </Col>
                    <Col>
                        <h6>
                            Score Card
                        </h6>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PlayArena;