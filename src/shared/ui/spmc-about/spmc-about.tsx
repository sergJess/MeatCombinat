import React from 'react';
import './spmc-about.css';
import Sausage from './img/saucage.png';
import { ReactComponent as ShapeLine } from './img/shape-line.svg';

export class SpmcAbout extends React.Component {
  renderNumberBlock(number: number, text: string): JSX.Element {
    return (
      <div className="spmc-number">
        <div className="spmc-about__number">{`${number}`}</div>
        <div className="primary-text2 spmc-about__text">{text}</div>
      </div>
    );
  }
  render() {
    const texts = [
      'производственный контроль, основанный на принципах ХАССП',
      'более 300 видов колбасных и деликатесных изделий, полуфабрикатов и охлажденного мяса',
      'более 10 тыс. тонн продукции в год',
      'новейшее высокотехнологичное оборудование',
    ];
    return (
      <div className="spmc-about">
        <div className="spmc-about__image">
          {/* <img src={Sausage}></img> */}
          <p className="spmc-about__image-text">
            спмк
            <span className="spmc-about__image-text_colored">это</span>
          </p>
        </div>
        <div className="spmc-about__numbers">
          {texts.map((elem, index) => {
            return <div key={index}>{this.renderNumberBlock(index + 1, elem)}</div>;
          })}
        </div>
      </div>
    );
  }
}
