import React, { useState } from 'react';
import Card from './Card';

export default function App() {
  const cardType = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  const [gameStart, setGameStart] = useState(false);

  // will randomize the order in which cards are placed
  function shuffle() {
    let currentIndex = cardType.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [cardType[currentIndex], cardType[randomIndex]] = [
        cardType[randomIndex], cardType[currentIndex]];
    }
    console.log('array', cardType);
    setGameStart(true);
    return cardType;
  }

  return (
    <div>
      <button onClick={shuffle}>Start the game!</button>
      <div>
        {gameStart
          ? cardType.map((card) => <Card card={card} />)
          : null}
      </div>

    </div>
  );
}
