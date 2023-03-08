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
    this.mockSlides = [Slide4, Slide1, Slide2, Slide3, Slide4, Slide1];
    this.sliderInfo = {
      currentSlide: 1,
      allSlides: this.mockSlides.length,
      currentPosition: this.props.slideWidth,
    };
    this.infiniteSlide = this.infiniteSlide.bind(this);
    this.state = { isTransitioned: true };
    this.sliderTransitionEnd = true;
  }
  addFirstSlideToEnd(slides: string[]) {
    if (slides.length > 1) {
      slides.push(slides[0]);
    }
  }
  addLastSlideToStart(slides: string[]) {
    if (slides.length > 1) {
      slides.push(slides[slides.length - 1]);
    }
  }
  setCurrentSlide(index: number) {
    this.sliderInfo.currentSlide = index;
  }
  setCurrentPosition(index: number) {
    this.sliderInfo.currentPosition = index;
  }
  infiniteSlide() {
    this.sliderTransitionEnd = true;
    if (this.sliderInfo.currentSlide == this.sliderInfo.allSlides - 1) {
      this.setSliderToStart();
      return;
    }
    if (this.sliderInfo.currentSlide == 0) {
      this.setSliderToEnd();
      return;
    }
  }
  componentDidMount(): void {
    this.setSliderToStart();
  }
  setSliderToStart() {
    const sldierTrack = this.sliderTrackRef.current;
    if (sldierTrack) {
      sldierTrack.classList.remove('slider__track_transition');
      sldierTrack.style.transform = `translateX(${this.props.slideWidth * -1}px)`;
      this.setCurrentPosition(this.props.slideWidth * -1);
      this.setCurrentSlide(1);
    }
  }
  setSliderToEnd() {
    const sldierTrack = this.sliderTrackRef.current;
    if (sldierTrack) {
      sldierTrack.classList.remove('slider__track_transition');
      sldierTrack.style.transform = `translateX(${
        this.props.slideWidth * (this.sliderInfo.allSlides - 2) * -1
      }px)`;
      this.setCurrentPosition(this.props.slideWidth * (this.sliderInfo.allSlides - 2) * -1);
      this.setCurrentSlide(this.sliderInfo.allSlides - 2);
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
      this.makeSliderTransite();
      sldierTrack.style.transform = `translateX(${newPosition}px)`;
      console.log(this.sliderInfo.currentSlide);
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
