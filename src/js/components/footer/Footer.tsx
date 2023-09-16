import React from "react";
import styles from './styles.scss';

const Footer = (props) => {
  const { children } = props;

  return (
    <div className={styles.footerContainer}>
      {children}
    </div>
  )
}

export default Footer;