import React from 'react';
import logo from '../landscape.png';
import styles from '../Styles/header.module.css';

const Header = () => {
  return (
    <header className={styles}>
      <img src={logo} alt='CV' className='header--logo' />
      <p className='header--text para'>My travel Journal</p>
    </header>
  );
};

export default Header;
