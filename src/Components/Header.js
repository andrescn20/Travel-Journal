import React from 'react';
import logo from '../landscape.png';
import styles from '../Styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='CV' className={styles.headerLogo} />
      <p className={styles.headerText}>My travel Journal</p>
    </header>
  );
};

export default Header;
