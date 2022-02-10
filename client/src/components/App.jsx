import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function App() {
  const cardType = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  const [gameStart, setGameStart] = useState(false);
  const [newMatch, setNewMatch] = useState(true);
  const [firstCard, setFirstCard] = useState(0);
  const [secondCard, setSecondCard] = useState(0);
  // const [matchingCards, setMatchingCards] = useState([]);
  const [shuffledCards, setShuffledCard] = useState(cardType);

  useEffect(() => {
    if (firstCard !== 0 && secondCard !== 0) {
      console.log('first', firstCard, 'second', secondCard);
      if (firstCard === secondCard) {
        // setMatchingCards([...matchingCards, Number(firstCard), Number(secondCard)]);
        // console.log('matching', matchingCards);
        console.log('same!');
      } else {
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

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      [cardType[currentIndex], cardType[randomIndex]] = [
        cardType[randomIndex], cardType[currentIndex]];
    }
    console.log('shuffled', cardType);

    setShuffledCard(cardType);
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
          ? shuffledCards.map((card) => (
            <div
              className="eachcard"
              id={card}
              onClick={(e) => clickedCard(e)}
            >
              <Card card={card} firstCard={firstCard} secondCard={secondCard} />
            </div>
          ))
          : null}
      </div>

    </div>
  );
}
