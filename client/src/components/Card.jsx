import React, { useState } from 'react';

export default function Card(props) {
  const { card } = props;
  const [cardImage, setCardImage] = useState('');
  const [startImage, setStartImage] = useState('');
  const [cardFlipped, setCardFlipped] = useState(false);
  // const [newMatch, setNewMatch] = useState(true);
  // const [firstCard, setFirstCard] = useState(0);
  // const [secondCard, setSecondCard] = useState(0);

  // function clickedCard(e) {
  //   if (newMatch === true) {
  //     setFirstCard(Number(e.target.id));
  //     console.log('firstcard', firstCard);
  //     setNewMatch(false);
  //     console.log('newmatch', newMatch);
  //   } else {
  //     setSecondCard(Number(e.target.id));
  //     console.log('secondCard', secondCard);
  //     if (firstCard == secondCard) {
  //       console.log('same!');
  //       setNewMatch(true);
  //     } else {
  //       console.log('not a match!');
  //       setNewMatch(true);
  //     }
  //   }
  // }
  return (

    <div
      id={card}
    >
      {cardFlipped ? cardImage : startImage}
      Each Card goes here
      {' '}
      {card}

    </div>

  );
}
