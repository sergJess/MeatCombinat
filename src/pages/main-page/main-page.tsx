import React from 'react';
import './main-page.css';
import { SPMCQuality } from 'entities/spmc-quality/spmc-quality';
import { Slider } from 'features/slider/slider';
import { SpmcAbout } from 'shared/ui/spmc-about/spmc-about';
import { Fascinated } from 'shared/ui/fascinated/fascinated';

export class MainPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="main-page">
        <div className="main-page__head-block">
          <SPMCQuality />
          <Slider slides={[]} slideWidth={800} slideHeight={800} />
        </div>
        <SpmcAbout />
        <Fascinated />
      </div>
    );
  }
}
