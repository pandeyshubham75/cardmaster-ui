/* 
 * Deck component for the cards game
 * Deck is a container for cards
 * The term deck can be misleading to mean like pile
 * But it means any group of cards (may be even a single card)
 * A Deck can be a pile, or another group of cards
 * Deck's responsibility is to decide whether it's a revealed deck, or an unrevealed deck
 * Compacted deck (with count on reverse side) and spread-out deck is also possible
 * Decks in consideration:
 * 1. My game deck
 * 2. My revealed (trick) deck
 * 3. Other players' deck
 * 4. Discarded Pile Deck
 * 5. Still In contention Deck
 * 6. Ability to make a custom deck for game
 * 7. My WON Deck
**/

import React from 'react';
import './Deck.css';

import Card from "../card/Card";

import CardGroup from 'react-bootstrap/CardGroup';

const cards = [];

class Deck extends React.Component {

    render() {
        this.generateCards();
        return (
            <div className="Deck">
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

    getCompactDeck() {
        return (
            <div className="Deck">
                
            </div>
        )
    }

    generateCards() {
        for (let i = 0; i < 13; i++) {
            let randomCard = this.generateRandomCard();
            while (this.checkExistsInDeck(randomCard)) {
                randomCard = this.generateRandomCard();
            }
            cards.push(randomCard);
        }
    }

    checkExistsInDeck({ number, suit }) {
        if (!number || !suit) return false;
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].number && cards[i].suit &&
                number == cards[i].number &&
                suit == cards[i].suit)
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

export default Deck;