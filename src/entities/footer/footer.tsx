import React from 'react';
import './footer.css';
import { Logotype } from 'shared/logo/logo';
import { Phone } from 'shared/phone/phone';
import { Email } from 'shared/email/email';
export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-info">
          <Logotype />
          <div>
            <Phone isBordered={false} isSmallSpace={false} phones={[]} />
            <Email isSmallSpace={false} email="info@spmk.ru" />
          </div>
        </div>
        <div className="primary-text">&#169; 1997-2023 АО `СПМК`</div>
      </footer>
    );
  }
}
