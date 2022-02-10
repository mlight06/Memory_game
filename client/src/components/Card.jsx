import React, { setState } from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFlipped: false,
    };
    console.log('card', this.props.card);
    this.flipCard = this.flipCard.bind(this);
  }
  // function checkMatch() {

  flipCard() {
    this.setState({ cardFlipped: true });
  }

  render() {
    return (
      <div
        className="cardNumber"
        onClick={this.flipCard}
      >
        {this.state.cardFlipped
          ? <img className="card" id="flippedimage" src={`./assets/${this.props.card}.png`} />
          : <img className="card" id="startimage" src="../assets/8.png" />}

      </div>
    );
  }
}
