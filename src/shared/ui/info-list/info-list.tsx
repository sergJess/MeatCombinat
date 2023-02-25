import React from 'react';
import './info-list.css';

export type TinfoListProps = {
  iconSrc: string;
  textTitle: string;
  textList: Array<string>;
  isTransposedTitle: boolean;
};
export class InfoList extends React.Component<TinfoListProps> {
  constructor(props: TinfoListProps) {
    super(props);
  }
  render() {
    return (
      <div className="info-list">
        <div className="info-list__img-inenner">
          <img src={this.props.iconSrc} alt="" />

          <div className="info-list__img-figures">
            <div className="info-list__img-circle"></div>
            <div className="info-list__img-line"></div>
          </div>
        </div>
        <div className="info-list__text-inner">
          {this.props.isTransposedTitle ? (
            <h3 className="info-list__text-title">
              {this.props.textTitle.split(' ').map((elem, index) => {
                return (
                  <span key={index} className="display-block">
                    {elem}
                  </span>
                );
              })}
            </h3>
          ) : (
            <h3 className="info-list__text-title">{this.props.textTitle}</h3>
          )}

          <ul>
            {this.props.textList.map((text, index) => {
              return (
                <li className="info-list__text-list primary-text2" key={index}>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
