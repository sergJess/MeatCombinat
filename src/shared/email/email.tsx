import React from 'react';
import './email.css';
import { ReactComponent as Envelop } from './envelop.svg';

export class Email extends React.Component {
  render() {
    return (
      <div className="email-inner">
        <Envelop />
        <a className="primary-text" href="mail:info@spmk.ru">
          info@spmk.ru
        </a>
      </div>
    );
  }
}
