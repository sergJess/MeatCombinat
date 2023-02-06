import React from 'react';
import './navigation.css';

export class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-inner">
          <li className="primary-text2">Главная</li>
          <li className="primary-text2">Производство</li>
          <li className="primary-text2">Наши магазины</li>
          <li className="primary-text2">Вакансии</li>
          <li className="primary-text2">Контакты</li>
        </ul>
      </nav>
    );
  }
}
