import React from 'react';
import "../css/header.css";

import Navigation from '../components/header/Navigation';
import HeaderSearch from '../components/header/HeaderSearch';

const Header = () => {
  return (
    <header className="header">
      <div className='header-wrap'>
        <Navigation/>
        <HeaderSearch/>
      </div>
    </header>
  );
};

export default Header;