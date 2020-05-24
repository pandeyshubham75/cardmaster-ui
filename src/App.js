import React from 'react';
import './App.css';
import CardSpread from './components/CardSpread/CardSpread';
import PlayArena from './components/PlayArena/PlayArena';

const App = () => (
    <div className="App">
        <h1>Welcome to Cardsking!</h1>
        <PlayArena></PlayArena>
        <CardSpread></CardSpread>
    </div>
);

export default App;