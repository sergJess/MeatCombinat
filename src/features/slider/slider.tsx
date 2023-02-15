import React from 'react';
import './slider.css';
import Slide1 from './images/slide-1.png';
import Slide2 from './images/slide-2.png';
import Slide3 from './images/slide-3.png';
import Slide4 from './images/slide-4.png';
import { ReactComponent as ArrowLeft } from './images/arrow-left.svg';
import { ReactComponent as ArrowRight } from './images/arrow-right.svg';
export const mockSlides = [Slide1, Slide2, Slide3, Slide4];
type TsliderSettings = {
  width: number;
  height: number;
};
type TsliderProps = {
  slides: string[];
  settings: TsliderSettings;
};

type tSliderState = {
  currentSlide: number;
  allSlides: number;
};

export class Slider extends React.Component<TsliderProps, tSliderState> {
  private sliderTrackRef: React.RefObject<HTMLDivElement>;
  constructor(props: TsliderProps) {
    super(props);
    this.sliderTrackRef = React.createRef();
    this.moveSlider = this.moveSlider.bind(this);
    this.setState({ currentSlide: 1 });
  }
  moveSlider(direction: number, step: number) {
    const sldierTrack = this.sliderTrackRef.current;
    if (sldierTrack) {
      const currentStep = step * direction;
      sldierTrack.style.transform = `translateX(${currentStep}px)`;
    }
  }
  render() {
    return (
      <div className="slider">
        <div className="slider-slides-info">
          <div className="slide-current"></div>
          <div className="slide-current"></div>
        </div>
        <div className="slider-track-inner">
          <div className="slider__track" ref={this.sliderTrackRef}>
            <div className="slide">
              <img src={Slide1} alt="" />
            </div>
            <div className="slide">
              <img src={Slide2} alt="" />
            </div>
            <div className="slide">
              <img src={Slide3} alt="" />
            </div>
            <div className="slide">
              <img src={Slide4} alt="" />
            </div>
          </div>
        </div>

        <div className="slider-controls">
          <div className="arrow" onClick={this.moveSlider.bind(null, -1, 805)}>
            <ArrowLeft />
          </div>
          <div className="slider-border-line"></div>
          <div className="arrow" onClick={this.moveSlider.bind(null, 1, 805)}>
            <ArrowRight />
          </div>
        </div>
      </div>
    );
  }
}
