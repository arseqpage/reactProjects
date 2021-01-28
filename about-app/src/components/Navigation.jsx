import React from 'react';
import clsx from 'clsx';

export default function Navigation({ className, openNav, onCloseMenu, items }) {
  const classes = clsx('nav', className, {
    show: openNav,
  });

  return (
    <nav className={classes}>
      <button className="btn-reset close" onClick={onCloseMenu}>
        Close
      </button>
      <ul className="nav__list">
        {items &&
          items.map((item, i) => (
            <li key={`${item}_${i}`} className="nav__item">
              {item}
            </li>
          ))}
      </ul>
    </nav>
  );
}
