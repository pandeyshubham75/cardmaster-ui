/* 
 * CardSpread component for the cards game
 * CardSpread is simply cards that are spread and visible
 * CardSpreads in consideration:
 * 1. My game CardSpread
 * 2. My revealed (trick) CardSpread
 * 3. Other players' CardSpread
**/

import React from 'react';
import './CardSpread.css';

import Card from "../card/Card";

import CardGroup from 'react-bootstrap/CardGroup';

let cards = [];

class CardSpread extends React.Component {

    render() {
        if (!this.props.cards || !this.props.cards.length){
            this.generateCards();
        } else {
            cards = this.props.cards;
        }
        return (
            <div className="CardSpread">
                <CardGroup>
                    {cards.map(
                        ({ number, suit }, index) => {
                            return <Card number={number} suit={suit} key={index}>    
                            </Card>
                        }
                    )}
                </CardGroup>
            </div>
        )
    }

    getCompactCardSpread() {
        return (
            <div className="CardSpread">
                
            </div>
        )
    }

    generateCards() {
        cards = [];
        for (let i = 0; i < 13; i++) {
            let randomCard = this.generateRandomCard();
            while (this.checkExistsInCardSpread(randomCard)) {
                randomCard = this.generateRandomCard();
            }
            cards.push(randomCard);
        }
    }

    checkExistsInCardSpread({ number, suit }) {
        if (!number || !suit) return false;
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].number && cards[i].suit &&
                number === cards[i].number &&
                suit === cards[i].suit)
                return true;
        }
        return false;
    }

    generateRandomCard() {
        const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
        return {
            number: this.getRandomIntegerInRange({ start: 1, end: 13 }),
            suit: suits[this.getRandomIntegerInRange({ start: 0, end: 3 })]
        };
    }
    
    getRandomIntegerInRange({ start= 0, end }) {
        let number = (Math.round(Math.random() * 100) % (end - start + 1));
        return number+start;
    }
}

export default CardSpread;