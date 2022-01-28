import React, { useEffect, useState } from 'react';

export default function Card(props) {
  const { card } = props;
  const { secondCard } = props;
  const { matchingCards } = props;
  const [cardFlipped, setCardFlipped] = useState(false);

  // function checkMatch() {
  useEffect(() => {
    if (secondCard != 0) {
      console.log('does it match', matchingCards, matchingCards.includes(card));
      if (matchingCards.includes(card)) {
        setCardFlipped(true);
        console.log('match');
      } else {
        console.log('no match');
        setTimeout(() => {
          setCardFlipped(false);
        }, 2500);
      }
    }
  }, [matchingCards, secondCard]);

  //   }
  // }
  // useEffect(() => {
  //   checkMatch();
  // }, [matchingCards]);

  function flipCard() {
    setCardFlipped(true);
  }

  return (

    <div
      className="cardNumber"
      onClick={flipCard}
    >
      {cardFlipped
        ? <img className={card} id="flippedimage" src={`./assets/${card}.png`} />
        : <img className={card} id="startimage" src="../assets/8.png" />}

    </div>

  );
}
