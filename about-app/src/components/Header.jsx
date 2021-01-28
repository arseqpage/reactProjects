import React, { useState } from 'react';
import { Navigation } from './index';

// import clsx from 'clsx';

export default function Header({ children }) {
  const [openNav, setOpenNav] = useState(false);
  const noScroll = 'no-scroll';

  function handleNavOpen() {
    setOpenNav(!openNav);
    document.body.className = noScroll;
  }

  function handleNavClose() {
    setOpenNav(!openNav);
    document.body.className = '';
  }

  return (
    <header className="header">
      <button className="btn-reset burger" onClick={handleNavOpen}>
        &#8734; menu
      </button>
      <Navigation
        className="header__nav"
        openNav={openNav}
        onCloseMenu={handleNavClose}
        items={['Home', 'About me', 'Portfolio', 'Contact']}
      />
    </header>
  );
}
