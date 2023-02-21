import React from 'react';
import './fascinated.css';

export class Fascinated extends React.Component {
  render() {
    return (
      <div className="fascinate">
        <h2 className="fascinate-title">
          Неравнодушный
          <span className="fascinate-title_word">побеждает</span>
        </h2>
        <h3 className="fascinate-subtitle">
          Работа нашего производства
          <span className="display-block">основывается на принципах</span>
        </h3>
        <div className="fascinate-text-block">
          <p className="fascinate-text-block__text1">esg</p>
          <p className="fascinate-text-block__text2">
            <span>Понятие появилось в 2004 году</span> — его сформулировал Кофи Аннан, который тогда
            занимал пост Генерального секретаря ООН. Он обратился к CEO ведущих мировых компаний с
            предложением включить эти принципы в свои стратегии. Обращение называлось Who Cares Wins
            — «Неравнодушный побеждает». Концепция действительно победила — спустя почти 20 лет
            принципы ESG соблюдают не только большие корпорации, но и многие компании малого и
            среднего бизнеса.
          </p>
        </div>
      </div>
    );
  }
}
