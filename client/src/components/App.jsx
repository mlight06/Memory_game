import React, { useState } from 'react';
import Card from './Card';

export default function App() {
  const cardType = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  const [gameStart, setGameStart] = useState(false);
  const [newMatch, setNewMatch] = useState(true);
  // let firstCard = 0;
  // let secondCard = 0;

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
  function clickedCard(e) {
    let firstCard = 0;
    let secondCard = 0;
    console.log('e', e.target.id);
    if (newMatch === true) {
      firstCard = e.target.id;
      console.log('firstcard', firstCard);
      setNewMatch(false);
    } else {
      secondCard = e.target.id;
      console.log('secondCard', secondCard, 'first', firstCard);
      if (firstCard === secondCard) {
        console.log('same!');
        setNewMatch(true);
      } else {
        console.log('not a match!');
        setNewMatch(true);
      }
    }
  }

  return (
    <div>
      <button onClick={shuffle}>Start the game!</button>
      <div id="cardscontainer">
        {gameStart
          ? cardType.map((card) => (
            <div
              className="eachcard"
              id={card}
              onClick={(e) => clickedCard(e)}
            >
              <Card card={card} />
            </div>
          ))
          : null}
      </div>

    </div>
  );
}
