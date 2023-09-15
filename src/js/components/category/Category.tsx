import React from "react";
import styles from './styles.scss';

const Category = (props) => {
  const { image, size, label } = props;

  const getRandomColor = () => "hsl(" + Math.random() * 360 + ", 10%, 75%)";

  return (
    <div className={styles.wrapper}>
      <div className={styles.img} style={{ width: size, height: size, backgroundColor: getRandomColor(), overflow: 'hidden' }}>
        {image && <img src={image} alt="Category" width={size} height={size}  />}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default Category;