import React, { FC } from 'react';

import styles from './styles.scss';

interface PriceView {
  currentPrice: any;
  actualPrice: any;
  currentPriceCustomClass?: string;
  actualPriceCustomClass?: string;
}

const PriceView: FC<PriceView> = (props) => {
  const {
    currentPrice = '0',
    actualPrice = '0',
    currentPriceCustomClass,
    actualPriceCustomClass
  } = props;
  return (
    <div className={styles.priceContainer}>
      <span
        className={`${styles.currentPrice}
        ${currentPriceCustomClass}
        `}
      >{`₹ ${currentPrice}`}</span>
      <span
        className={`${styles.actualPrice}
        ${actualPriceCustomClass}`}
      >{`₹${actualPrice}`}</span>
    </div>
  );
};

export default PriceView;
