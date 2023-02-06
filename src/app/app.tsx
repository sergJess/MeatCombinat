import React from 'react';
import './style/base-styles.css';
import './style/common-styles.css';
import { Phone } from 'shared/phone/phone';
export class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Phone isBordered={true} />
      </div>
    );
  }
}
