import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function App() {
  const cardType = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  const [gameStart, setGameStart] = useState(false);
  const [newMatch, setNewMatch] = useState(true);
  const [firstCard, setFirstCard] = useState(0);
  const [secondCard, setSecondCard] = useState(0);

  useEffect(() => {
    if (firstCard !== 0 && secondCard !== 0) {
      console.log('first', firstCard, 'second', secondCard, 'new', newMatch, firstCard === secondCard);
      if (firstCard === secondCard) {
        console.log('same!');
      } else {
      // use setTimeout to reset card images
        console.log('not a match!');
      }
      setFirstCard(0);
      setSecondCard(0);
    }
  }, [firstCard, secondCard, newMatch]);

  // will randomize the order in which cards are placed
  function shuffle() {
    let currentIndex = cardType.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      [cardType[currentIndex], cardType[randomIndex]] = [
        cardType[randomIndex], cardType[currentIndex]];
    }

    return cardType;
  }
  function dealCards() {
    shuffle();
    console.log('card', cardType);
    setGameStart(true);
  }

  function clickedCard(e) {
    if (newMatch === true) {
      // console.log('e', e.target.id);
      setFirstCard(e.target.id);
      // console.log('firstcard', firstCard);
      setNewMatch(false);
    } else {
      setSecondCard(e.target.id);
      // console.log('secondCard', secondCard, 'first', firstCard);
      setNewMatch(true);
    }
  }

  return (
    <div>
      <button onClick={dealCards}>Start the game!</button>
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
