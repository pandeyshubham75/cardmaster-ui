import React from 'react';
import './App.css';
import Card from './components/card/Card'
import { hot } from 'react-hot-loader';

const App = () => (
    <div className="App">
        <h1>Welcome to Cards Master!</h1>
        <Card number='7' suit='&spades;'></Card>
    </div>
);

export default hot(module)(App);