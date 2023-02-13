import React from 'react';
import './style/base-styles.css';
import './style/common-styles.css';
import { Header } from 'widgets/header/header';
import { Footer } from 'entities/footer/footer';
import { SPMCQuality } from 'entities/spmc-quality/spmc-quality';
export class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <Header />
        <SPMCQuality />
        <Footer />
      </div>
    );
  }
}
