import React from "react";
import PriceView from "../PriceView/PriceView";
import styles from "./styles.scss";

const ProductCard = (props) => {
  const { image, name, offerPrize, prize } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src={image} alt="Product Img" width={108} height={108} />
      </div>
      <div className={styles.name}>{name}</div>
      <PriceView
        currentPrice={offerPrize}
        actualPrice={prize}
        currentPriceCustomClass={styles.currentPriceCustom}
        actualPriceCustomClass={styles.actualPriceCustom}
      />
    </div>
  );
};

export default ProductCard;
