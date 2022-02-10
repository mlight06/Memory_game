import React, { setState } from 'react';

export default class Card extends React.Component(props) {
  constructor(props) {
    super();
    this.state = {
      card: props.card,
      flippedCard: false,
    };
  }

  // function checkMatch() {

  flipCard() {
    this.setState({ flippedCard: true });
  }

  render() {
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
}
