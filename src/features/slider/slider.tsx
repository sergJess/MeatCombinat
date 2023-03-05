import React from 'react';
import './slider.css';
import Slide1 from './images/slide-1.png';
import Slide2 from './images/slide-2.png';
import Slide3 from './images/slide-3.png';
import Slide4 from './images/slide-4.png';
import { ReactComponent as ArrowLeft } from './images/arrow-left.svg';
import { ReactComponent as ArrowRight } from './images/arrow-right.svg';
export const mockSlides = [Slide1, Slide2, Slide3, Slide4];

type TsliderProps = {
  slides: string[];
  slideWidth: number;
  slideHeight: number;
};
type tsliderState = {
  isTransitioned: boolean;
};
type tSliderInfo = {
  currentSlide: number;
  allSlides: number;
  currentPosition: number;
};

export class Slider extends React.Component<TsliderProps, tsliderState> {
  private sliderTrackRef: React.RefObject<HTMLDivElement>;
  private sliderArrowLeft: React.RefObject<HTMLDivElement>;
  private slidesLength: number;
  private mockSlides: string[];
  private sliderInfo: tSliderInfo;
  private sliderTransitionEnd;
  constructor(props: TsliderProps) {
    super(props);
    this.sliderTrackRef = React.createRef();
    this.sliderArrowLeft = React.createRef();
    this.moveSlider = this.moveSlider.bind(this);
    this.slidesLength = this.props.slides.length;
    this.sliderInfo = { currentSlide: 0, allSlides: this.slidesLength, currentPosition: 0 };
    this.mockSlides = [Slide1, Slide2, Slide3, Slide4];
    this.addFirstSlideToEnd(this.mockSlides);
    this.infiniteSlide = this.infiniteSlide.bind(this);
    this.state = { isTransitioned: true };
    this.sliderTransitionEnd = true;
  }
  addFirstSlideToEnd(slides: string[]) {
    if (slides.length > 1) {
      slides.push(slides[0]);
    }
  }
  setCurrentSlide(index: number) {
    this.sliderInfo.currentSlide = index;
  }
  setCurrentPosition(index: number) {
    this.sliderInfo.currentPosition = index;
  }
  componentDidUpdate() {}
  infiniteSlide() {
    this.sliderTransitionEnd = true;
  }
  setSliderToStart() {
    const sldierTrack = this.sliderTrackRef.current;
    if (sldierTrack) {
      sldierTrack.classList.remove('slider__track_transition');
      sldierTrack.style.transform = `translateX(0px)`;
      this.setCurrentPosition(0);
      this.setCurrentSlide(0);
    }
  }
  makeSliderTransite() {
    const sldierTrack = this.sliderTrackRef.current;
    if (sldierTrack) {
      sldierTrack.classList.add('slider__track_transition');
    }
  }
  moveSlider(direction: number, step: number) {
    const sldierTrack = this.sliderTrackRef.current;
    if (sldierTrack && this.sliderTransitionEnd) {
      this.sliderTransitionEnd = false;
      const newPosition = this.sliderInfo.currentPosition + step * direction;
      this.setCurrentSlide(direction * -1 + this.sliderInfo.currentSlide);
      this.setCurrentPosition(newPosition);
      sldierTrack.style.transform = `translateX(${newPosition}px)`;
    }
  }
  sliderSlideClass() {
    return this.state.isTransitioned ? 'slider__track slider__track_transition' : 'slider__track';
  }
  render() {
    return (
      <div className="slider">
        <div className="slider-slides-info">
          <div className="slide-current"></div>
          <div className="slide-current"></div>
        </div>
        <div className="slider-track-inner">
          <div
            className="slider__track slider__track_transition"
            onTransitionEnd={this.infiniteSlide}
            ref={this.sliderTrackRef}
          >
            {this.mockSlides.map((src, index) => {
              return (
                <div className="slide" key={index}>
                  <img src={src} alt="" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="slider-controls">
          <div className="arrow" onClick={this.moveSlider.bind(null, -1, this.props.slideWidth)}>
            <ArrowLeft />
          </div>
          <div className="slider-border-line"></div>
          <div className="arrow" onClick={this.moveSlider.bind(null, 1, this.props.slideWidth)}>
            <ArrowRight />
          </div>
        </div>
      </div>
    );
  }
}
