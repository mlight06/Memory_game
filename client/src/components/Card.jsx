import React, { useState } from 'react';

export default function Card(props) {
  // const { card } = props;
  console.log('props', props);
  const { cardImage, setCardImage } = useState('');
  const { startImage, setStartImage } = useState('');
  const { cardFlipped, setCardFlipped } = useState(false);
  return (
    <div id="eachcard">
      {cardFlipped ? cardImage : startImage}
      Each Card goes here

    </div>
  );
}
