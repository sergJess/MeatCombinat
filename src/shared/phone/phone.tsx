import React from 'react';
import './phone.css';
import { ReactComponent as PhoneSvg } from './phone.svg';
export type TphoneNumber = {
  text: string;
  call: string;
};
export type Tphone = {
  isBordered: boolean;
  isSmallSpace: boolean;
  phones: TphoneNumber[];
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
          if (length % index !== 0 && index + 1 !== length) {
            return (
              <div key={index} className="phone-block">
                <a className="primary-text" href={`tel:${el.call}`}>
                  {el.text}
                </a>
                <span className="phone-border"></span>
              </div>
            );
          } else {
            return (
              <div key={index} className="phone-block">
                <a className="primary-text" href={`tel:${el.call}`}>
                  {el.text}
                </a>
              </div>
            );
          }
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
        {this.createPhoneText(this.props.phones)}
      </div>
    );
  }
}
