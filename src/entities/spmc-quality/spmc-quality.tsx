import React from 'react';
import './spmc-quality.css';
import { LineDown } from 'shared/ui/line-down/line-down';

export class SPMCQuality extends React.Component {
  render() {
    return (
      <div className="spmc-quality-inner">
        <LineDown />
        <div className="spmc-quality-head-block">
          <div>
            <h2 className="head-title spmc-quality-title">
              Качество
              <br />
              Люди
              <br />
              Традиции
            </h2>
          </div>
          <div>
            <p className="primary-text">
              Сергиево-Посадский мясокомбинат основан в 1912 году на базе монастырской бойни.
              Мясокомбинат расположен в одной из самых экологически чистых зон Подмосковья
            </p>
          </div>
        </div>
      </div>
    );
  }
}
