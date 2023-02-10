import React from 'react';
import './header.css';
import { Logotype } from 'shared/ui/logo/logo';
import { Phone } from 'shared/ui/phone/phone';
import { Email } from 'shared/ui/email/email';
import { Navigation } from 'features/navigation/navigation';

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-info">
          <Logotype />
          <Phone
            isBordered={true}
            isSmallSpace={false}
            phones={[{ text: '8 496 552-21-21', call: '84965522121' }]}
          />
          <Email isSmallSpace={false} email="info@spmk.ru" />
        </div>
        <div>
          <Navigation />
        </div>
      </header>
    );
  }
}
