import React from "react";
import Header from "app/components/header/Header";
import PlantList from 'app/components/plants/Plants';

import styles from './styles.scss';

const Plants = () => {
  return (
    <div className={styles.plantsContainer}>
      <Header title="Plants" hasBack />
      <PlantList />
    </div>
  )
}

export default Plants;