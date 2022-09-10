import React from 'react';
import styles from '../Styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles}>
      <a href='./' className='footerItem'>
        <p>
          Created by: <span className='boldText'> andrescn20 </span>
        </p>
        <img
          className={styles.gitLogo}
          src='https://cdn1.iconfinder.com/data/icons/logotypes/32/github-48.png'
          alt='gitLogo'
        />
      </a>
    </footer>
  );
};

export default Footer;
