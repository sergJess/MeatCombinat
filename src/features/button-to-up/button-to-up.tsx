import React from 'react';
import './button-to-up.css';
import toUp from './img/to-up.svg';

export class ButtonToUp extends React.Component {
  constructor() {
    super({});
    this.moveToUp = this.moveToUp.bind(this);
  }
  moveToUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <div className="button-to-up" onClick={this.moveToUp}>
        <img src={toUp} alt="" />
      </div>
    );
  }
}
