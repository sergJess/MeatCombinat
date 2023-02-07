import React from 'react';
import './email.css';
import { ReactComponent as Envelop } from './envelop.svg';
export type Temail = {
  email: string;
  isSmallSpace: boolean;
};
export class Email extends React.Component<Temail> {
  constructor(props: Temail) {
    super(props);
  }
  render() {
    const isSmallSpace = this.props.isSmallSpace;
    const classEmail = isSmallSpace ? 'email-inner email-space-small' : 'email-inner email-space';
    return (
      <div className={classEmail}>
        <Envelop />
        <p className="primary-text">{this.props.email}</p>
      </div>
    );
  }
}
