import React from 'react';

import './header.css';
import routes from '../../routes';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <a href={routes.rootPage}>
        <img src={logo} alt='logo' width={230} height={60} />
      </a>
    </header>
  );
};

export default Header;
