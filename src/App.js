import React from 'react';
import './App.css';
import Deck from './components/deck/Deck'
import { hot } from 'react-hot-loader';

const App = () => (
    <div className="App">
        <h1>Welcome to Cards Master!</h1>
        <Deck></Deck>
    </div>
);

export default hot(module)(App);