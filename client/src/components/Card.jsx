import React, { setState } from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFlipped: false,
      matched: false,
    };
    console.log('card', this.props.card);
    console.log('first', this.props.firstCard, this.props.secondCard);
  }

  componentDidUpdate() {
    if (this.props.firstCard === this.props.card || this.props.secondCard === this.props.card) {
      this.setState({ matched: true });
    }
    this.state.matched ? null : setTimeout(() => {
      this.setState({ cardFlipped: false });
    }, 2500);
  }

  flipCard = () => {
    this.setState({ cardFlipped: true });
  };

  render() {
    return (
      <div
        className="cardNumber"
        onClick={this.flipCard}
      >
        {this.state.cardFlipped
          ? <img className={this.props.card} id="flippedimage" src={`./assets/${this.props.card}.png`} />
          : <img className={this.props.card} id="startimage" src="../assets/8.png" />}

      </div>
    );
  }
}
