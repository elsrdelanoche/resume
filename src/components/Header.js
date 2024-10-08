import React from 'react';
import logo from '../../src/IMG/transparentLogo.png';
import './Header.css';

function Header() {
  return (
    <header className="header container px-3">
      <div className="header-left">
        <h1 className="header-name">elsrdelanoche</h1>
      </div>
      <div className="header-right">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
    </header>
  );
}

export default Header;
