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

class Deck extends React.Component {
    render() {
        return (
        <div className="Deck">
            <Card number='1' suit='hearts'></Card>
            <Card number='11' suit='spades'></Card>
            <Card number='12' suit='diamonds'></Card>
            <Card number='13' suit='clubs'></Card>
        </div>
        )
    }
}

export default Deck;