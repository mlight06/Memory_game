import React from 'react';
import Card from './Card';

export default function App() {
  const cardType = ['one', 'one', 'two', 'two', 'three', 'three', 'four',
    'four', 'five', 'five', 'six', 'six'];

  // will randomize the order in which cards are placed
  function shuffle() {
    console.log('shuffling');
    const currentCard = Math.floor(Math.random() * cardType.length);
    console.log('currentCard', currentCard);
  }
  return (
    <div>
      <button onClick={shuffle}>Start the game!</button>
      <div id="initialcards">
        <Card />
      </div>
    </div>
  );
}
