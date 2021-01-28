import React from 'react';


import { Scroll } from './index.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <Scroll classNames="hero__scroll" />
      </div>
    </section>
  );
}
