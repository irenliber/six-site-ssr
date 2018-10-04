import React, {Fragment} from 'react';
import arrow from '../assets/images/arrow.png'

const ArrowLink = (props) => {
  return (
    <div className={`arrow-link-wrapper ${props.class ? props.class : ''}`}>
      <a className={`arrow-link d-flex align-items-center ${props.bold ? "weight-bold" : ""}`} href={props.href}>
        { props.left ? (
          <Fragment>
            <img src={arrow} width={10} className="arrow-left" alt="arrow"/>
            <span>{props.text}</span>
          </Fragment>
        ) : (
          <Fragment>
            <span>{props.text}</span>
            <img src={arrow} width={10} className="arrow-right" alt="arrow"/>
          </Fragment>
        )}
      </a>
    </div>
  );
};

export default ArrowLink

