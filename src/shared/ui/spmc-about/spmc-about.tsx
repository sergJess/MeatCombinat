import React from 'react';
import './spmc-about.css';
import Sausage from './img/saucage.png';
import { ReactComponent as ShapeLine } from './img/shape-line.svg';

export class SpmcAbout extends React.Component {
  renderNumbers() {}
  render() {
    return (
      <div className="spmc-about">
        <div className="spmc-about__image">
          <img src={Sausage}></img>
          <p className="spmc-about__image-text">
            спмк
            <span className="spmc-about__image-text_colored">это</span>
          </p>
        </div>
        <div className="spmc-about__numbers"></div>
      </div>
    );
  }
}
