import React from 'react';
import './phone.css';
import { ReactComponent as PhoneSvg } from './phone.svg';
export type Tphone = {
  isBordered: boolean;
  isSmallSpace: boolean;
  phones: string[];
};
export type TphoneNumber = {
  text: string;
  call: string;
};
export class Phone extends React.Component<Tphone> {
  constructor(props: Tphone) {
    super(props);
  }
  createPhoneText(phones: TphoneNumber[]): JSX.Element {
    const length = phones.length;
    return (
      <div className="phones-inner">
        {phones.map((el, index) => {
          return (
            <a key={index} href={`tel:${el.call}`}>
              {el.text}
            </a>
          );
        })}
      </div>
    );
  }
  render() {
    const classBordered = this.props.isBordered ? 'phone-bordered' : '';
    const classSmallSpace = this.props.isSmallSpace ? 'phone-space-small' : 'phone-space';
    const classPhone = `phone-inner ${classBordered} ${classSmallSpace}`;
    return (
      <div className={classPhone}>
        <PhoneSvg />
        <a className="primary-text" href="tel:84965522121">
          8 496 552-21-21
        </a>
      </div>
    );
  }
}
