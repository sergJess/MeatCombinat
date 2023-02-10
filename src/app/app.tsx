import React from 'react';
import './style/base-styles.css';
import './style/common-styles.css';
import { Header } from 'widgets/header/header';
import { Footer } from 'entities/footer/footer';
import { LineDown } from 'shared/ui/line-down/line-down';
export class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <Header />
        <LineDown />
        <Footer />
      </div>
    );
  }
}
