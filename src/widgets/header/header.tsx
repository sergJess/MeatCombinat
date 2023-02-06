import React from 'react';
import './header.css';
import { Logotype } from 'shared/logo/logo';
import { Phone } from 'shared/phone/phone';
import { Email } from 'shared/email/email';
import { Navigation } from 'features/navigation/navigation';

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-info">
          <Logotype />
          <Phone isBordered={true} />
          <Email />
        </div>
        <div>
          <Navigation />
        </div>
      </header>
    );
  }
}
