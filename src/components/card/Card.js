/*
 * The component for the single playing card
 **/

 import React from 'react';
 import './Card.css';

 import BSCard from 'react-bootstrap/Card';
 import APP_CONSTANTS from '../../constants';

 const FACE_CARDS_VALUE_MAP = {
     1: 'A',
     11: 'J',
     12: 'K',
     13: 'Q'
 }
 
 class Card extends React.Component {
     render() {
         return <BSCard className={"PlayingCard suit-"+ this.props.suit}>
            <BSCard.Body>
                <div>{this.getCardValue()}</div>
                <div className = "suit-sign">{this.getCardSuitCode()}</div>
            </BSCard.Body>
         </BSCard>
     }

     getCardValue() {
         const numericValue = parseInt(this.props.number);
         if (numericValue === 1 || (numericValue > 10 && numericValue < 14)){
             return FACE_CARDS_VALUE_MAP[numericValue];
         }
         return numericValue;
     }

     getCardSuitCode() {
         if (this.props.suit === APP_CONSTANTS.SPADES.name) return APP_CONSTANTS.SPADES.code;
         if (this.props.suit === APP_CONSTANTS.DIAMONDS.name) return APP_CONSTANTS.DIAMONDS.code;
         if (this.props.suit === APP_CONSTANTS.HEARTS.name) return APP_CONSTANTS.HEARTS.code;
         if (this.props.suit === APP_CONSTANTS.CLUBS.name) return APP_CONSTANTS.CLUBS.code;
     }
 }

 export default Card;