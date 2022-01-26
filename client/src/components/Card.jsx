import React, { useState } from 'react';

export default function Card(props) {
  const { card } = props;
  const [cardImage, setCardImage] = useState('');
  const [startImage, setStartImage] = useState('');
  const [cardFlipped, setCardFlipped] = useState(false);

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
