import React from 'react';
import PlantCard from '../PlantCard/PlantCard';
import styles from "./styles.scss"

const Plants = (props) => {
  const { data } = props;
  return (
    <div className={styles.container}>
      {data?.map((details) => (
        <div><PlantCard details={details} key={details.id} /></div>
      ))}
    </div>
  );
};

export default Plants;
