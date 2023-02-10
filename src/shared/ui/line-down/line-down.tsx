import React from 'react';
import './line-down.css';
import { ReactComponent as ArrowDown } from './arrow-down.svg';

export class LineDown extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="line-down-inner">
        <div className="line-down"></div>
        <div className="line-down-circle">
          <ArrowDown />
        </div>
      </div>
    );
  }
}
