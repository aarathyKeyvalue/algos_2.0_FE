import React from 'react';
import PlantCard from '../PlantCard/PlantCard';
import styles from "./styles.scss"

const Plants = () => {
  return (
    <div className={styles.container}>
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
    </div>
  );
};

export default Plants;
