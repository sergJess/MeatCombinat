import React from 'react';
import './phone.css';
import { ReactComponent as PhoneSvg } from './phone.svg';
export type Tphone = {
  isBordered: boolean;
};
export class Phone extends React.Component<Tphone> {
  constructor(props: Tphone) {
    super(props);
  }
  render() {
    if (this.props.isBordered) {
      return (
        <div className="phone-inner phone-bordered">
          <PhoneSvg />
          <a className="primary-text" href="tel:84965522121">
            8 496 552-21-21
          </a>
        </div>
      );
    } else {
      return (
        <div className="phone-inner">
          <PhoneSvg />
          <a className="primary-text" href="tel:84965522121">
            8 496 552-21-21
          </a>
        </div>
      );
    }
  }
}
