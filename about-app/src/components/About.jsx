import React from 'react';

import { Navigation, Scroll } from './index';

import jason from '../assets/images/jason.png';

export default function About() {
  return (
    <section className="about" id="about">
      <Navigation className="about__nav" items={['Home', 'About me', 'Portfolio', 'Contact']} />

      <div className="container about__container">
        <div className="about__block">
          <img className="about__img" src={jason} alt="Jason" />

          <div className="about__text">
            <h2 className="about__title">About me</h2>
            <p className="about__descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="about__descr">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="about__name">Jason Wood</p>
          </div>
        </div>
        <Scroll />
      </div>
    </section>
  );
}
