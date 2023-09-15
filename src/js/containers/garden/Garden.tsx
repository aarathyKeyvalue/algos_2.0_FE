import React from "react";

import Header from "app/components/header/Header";

import styles from './styles.scss';

const Garden = () => {
  return (
    <div className={styles.gardenContainer}>
      <Header hasMenu title="My Garden" titleCenter  hasSearch/>
      <div></div>
    </div>
  )
}

export default Garden;