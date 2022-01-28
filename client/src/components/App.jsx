import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function App() {
  const cardType = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  const [gameStart, setGameStart] = useState(false);
  const [newMatch, setNewMatch] = useState(true);
  const [firstCard, setFirstCard] = useState(0);
  const [secondCard, setSecondCard] = useState(0);
  const [matchingCards, setMatchingCards] = useState([]);

  useEffect(() => {
    if (firstCard !== 0 && secondCard !== 0) {
      console.log('first', firstCard, 'second', secondCard);
      if (firstCard === secondCard) {
        setMatchingCards((matchingCards) => [...matchingCards, Number(firstCard), Number(secondCard)]);
        console.log('matching', matchingCards);
        console.log('same!');
      } else {
      // use setTimeout to reset card images

        console.log('not a match!');
      }
      setFirstCard(0);
      setSecondCard(0);
    }
  }, [firstCard, secondCard, newMatch, matchingCards]);

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
    setGameStart(true);
  }

  function clickedCard(e) {
    if (newMatch === true) {
      setFirstCard(e.target.className);
      setNewMatch(false);
    } else {
      setSecondCard(e.target.className);
      setNewMatch(true);
    }
  }

  return (
    <div id="main">
      <button onClick={dealCards}>Start the game!</button>
      <div id="cardscontainer">
        {gameStart
          ? cardType.map((card) => (
            <div
              className="eachcard"
              id={card}
              onClick={(e) => clickedCard(e)}
            >
              <Card card={card} matchingCards={matchingCards} secondCard={secondCard} />
            </div>
          ))
          : null}
      </div>

    </div>
  );
}
