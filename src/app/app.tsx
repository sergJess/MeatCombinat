import React from 'react';
import './style/base-styles.css';
import './style/common-styles.css';
import { Header } from 'widgets/header/header';
export class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
