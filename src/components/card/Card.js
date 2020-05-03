/*
 * The component for the single playing card
 **/

 import React from 'react';
 
 class Card extends React.Component {
     render() {
         return <div>
            <h1>{this.props.number}</h1>
            <h1>{this.props.suit}</h1>
         </div>
     }
 }

 export default Card;