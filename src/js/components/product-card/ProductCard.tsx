import React from "react";
import styles from "./styles.scss";

const ProductCard = (props) => {
  const { image, name } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src={image} alt="Product Img" width={108} height={108} />
      </div>
      <div className={styles.content}>{name}</div>
    </div>
  );
};

export default ProductCard;
