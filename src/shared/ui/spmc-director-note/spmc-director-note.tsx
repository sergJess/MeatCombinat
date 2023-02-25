import React from 'react';
import './spmc-director-note.css';
import director from './images/director.png';
import quotes from './images/quotes.svg';
import arrowLine from './images/arrow-line.svg';

export class SpmcDirectorNote extends React.Component {
  render() {
    return (
      <div className="spmc-director-note">
        <div className="spmc-director-note__text-inner">
          <div>
            <img src={quotes} alt="" />
          </div>
          <div className="spmc-director-note__text-block">
            <p className="primary-text spmc-director-note__text-first">
              ESG-повестка в современных компаниях вышла на уровень первых лиц и советов директоров.
              Отказ от данной повестки или недостаточное к ней внимание может привести к самым
              негативным последствиям. Мы в «СПМК» полностью разделяем принципы ESG и планируем в
              ближайшие годы активнее внедрять их на собственном производстве, а так же
              содействовать продвижению ESG-повестки в российском бизнес-сообществе
            </p>
            <h4 className="small-title">Е.В. Макаров </h4>
            <div>
              <img className="line-arrow-img" src={arrowLine} alt="" />
            </div>
            <p className="primary-text">
              Генеральный директор <span className="display-block">АО «СПМК»</span>
            </p>
          </div>
        </div>
        <div>
          <img className="spmc-director-note__img" src={director} alt="" />
        </div>
      </div>
    );
  }
}
