import React from 'react';
import { useNavigate } from 'react-router-dom';

import './header.css';
import routes from '../../routes';
import logo from '../../assets/logo.png';
import { useTodoContext } from '../../context';

const Header = () => {
  const { setCurrentProjectId } = useTodoContext();
  const nav = useNavigate();

  const handleClick = () => {
    setCurrentProjectId(null);
    nav(routes.rootPage);
  };

  return (
    <header>
      <a onClick={handleClick} href={routes.rootPage}>
        <img src={logo} alt='logo' width={230} height={60} />
      </a>
    </header>
  );
};

export default Header;
