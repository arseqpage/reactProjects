import React from 'react';
import clsx from 'clsx';

import sprite from '../assets/images/sprite.svg';

export default function Scroll({ className }) {
  const classes = clsx('scroll', className);
  return (
    <div className={classes}>
      <div className="scroll__name">scroll down to see more</div>
      <svg className="scroll__icon">
        <use xlinkHref={`${sprite}#arrow`}></use>
      </svg>
    </div>
  );
}
